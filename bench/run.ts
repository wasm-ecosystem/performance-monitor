import { argv } from "process";
import { cmd, cmdWithStdout } from "./exec.js";
import * as parser from "./parser/run.js";
import { existsSync, writeFileSync } from "fs";
import { arch, platform } from "os";
import { ensureDirSync, exists } from "fs-extra";

async function buildBenchmark() {
  await Promise.all([
    cmd(
      `cmake -S bench -B bench/build_passive -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-DNO_PASSIVE_PROTECTION_WARNING -DLINEAR_MEMORY_BOUNDS_CHECKS=1 -DACTIVE_STACK_OVERFLOW_CHECK=1 -DACTIVE_DIV_CHECK=1"`,
      {}
    ),
    cmd(`cmake -S bench -B bench/build_active -DCMAKE_BUILD_TYPE=Release`, {}),

    cmd(
      `cmake -S bench -B bench/build_passive_baseline -DBASELINE=ON -DCMAKE_BUILD_TYPE=Release -DCMAKE_CXX_FLAGS="-DNO_PASSIVE_PROTECTION_WARNING -DLINEAR_MEMORY_BOUNDS_CHECKS=1 -DACTIVE_STACK_OVERFLOW_CHECK=1 -DACTIVE_DIV_CHECK=1"`,
      {}
    ),
    cmd(`cmake -S bench -B bench/build_active_baseline -DBASELINE=ON -DCMAKE_BUILD_TYPE=Release`, {}),
  ]);
  await cmd("cmake --build bench/build_passive --parallel", {});
  await cmd("cmake --build bench/build_active --parallel", {});
  await cmd("cmake --build bench/build_passive_baseline --parallel", {});
  await cmd("cmake --build bench/build_active_baseline --parallel", {});
}

function timestampToYYMMDD(timestamp: number) {
  const date = new Date(timestamp);
  const year = date.getFullYear().toString().slice(-2);
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate().toString().padStart(2, "0");
  return `${year}${month}${day}`;
}

async function main() {
  const warpoSHA = (await cmdWithStdout("git rev-parse --short HEAD", { cwd: "bench/deps/warpo" })).trim();
  const wasmCompilerSHA = (
    await cmdWithStdout("git rev-parse --short HEAD", { cwd: "bench/deps/wasm-compiler" })
  ).trim();
  const warpoDate = Date.parse(
    (await cmdWithStdout(`git log -1 --pretty=format:"%cd" --date=iso`, { cwd: "bench/deps/warpo" })).trim()
  );
  const wasmCompilerDate = Date.parse(
    (await cmdWithStdout(`git log -1 --pretty=format:"%cd" --date=iso`, { cwd: "bench/deps/wasm-compiler" })).trim()
  );
  const useWarpoDate = warpoDate > wasmCompilerDate;
  const date = timestampToYYMMDD(useWarpoDate ? warpoDate : wasmCompilerDate);
  const outputFilePath = `data/${platform()}-${arch()}/${date}-warpo@${warpoSHA}+wasm-compiler@${wasmCompilerSHA}`;
  if (existsSync(outputFilePath) && !argv.includes("--force")) {
    console.log(`Output file ${outputFilePath} already exists. Use --force to overwrite.`);
    return;
  }

  if (!argv.includes("--skip-build")) {
    await buildBenchmark();
    await parser.build();
  }

  const parserResult = await parser.run();
  const result = [{ name: "parser", results: parserResult }];
  ensureDirSync(`data/${platform()}-${arch()}`);
  writeFileSync(outputFilePath, JSON.stringify(result, null, 2));
  console.log(JSON.stringify(result, null, 2));
}

main();
