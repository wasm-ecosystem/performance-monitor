import { existsSync, readFileSync, rmSync } from "node:fs";
import { cmd } from "../exec.js";

export async function build() {
  if (existsSync("bench/transpose/out/transpose.baseline.wasm")) rmSync("bench/transpose/out/transpose.baseline.wasm");
  if (existsSync("bench/transpose/out/transpose.Oz.wasm")) rmSync("bench/transpose/out/transpose.Oz.wasm");
  if (existsSync("bench/transpose/out/transpose.O3.wasm")) rmSync("bench/transpose/out/transpose.O3.wasm");
  await Promise.all([
    await cmd(
      "node node_modules/assemblyscript/bin/asc.js bench/transpose/src/index.ts" +
        " --exportRuntime" +
        " --optimizeLevel 0 --shrinkLevel 2" +
        " --disable nontrapping-f2i" +
        " -o bench/transpose/out/transpose.baseline.wasm",
      {}
    ),
    await cmd(
      "./bench/deps/warpo/build/warpo/warpo_asc bench/transpose/src/index.ts" +
        " --exportRuntime" +
        " --optimizeLevel 0 --shrinkLevel 2" +
        " --disable-feature nontrapping-f2i" +
        " -o bench/transpose/out/transpose.Oz.wasm",
      {}
    ),
    await cmd(
      "./bench/deps/warpo/build/warpo/warpo_asc bench/transpose/src/index.ts" +
        " --exportRuntime" +
        " --optimizeLevel 3 --shrinkLevel 0" +
        " --disable-feature nontrapping-f2i" +
        " -o bench/transpose/out/transpose.O3.wasm",
      {}
    ),
  ]);
}

type WasmCompilerMode = "active" | "passive";
type CaseMode = "baseline" | "Oz" | "O3";

type BenchOutput = { microseconds: number; bytes: number };
async function runBench(compilerMode: WasmCompilerMode, caseMode: CaseMode): Promise<BenchOutput> {
  const CNT = 10;
  let microseconds = 0;
  let codeSize = 0;
  for (let i = 0; i < CNT; i++) {
    if (caseMode == "baseline") {
      await cmd(
        `bench/build_${compilerMode}_baseline/transpose/transpose bench/transpose/out/transpose.${caseMode}.wasm`,
        {}
      );
    } else {
      await cmd(`bench/build_${compilerMode}/transpose/transpose bench/transpose/out/transpose.${caseMode}.wasm`, {});
    }
    const r = JSON.parse(readFileSync("bench/transpose/out/result.txt", "utf-8"));
    microseconds += r["time(microseconds)"];
    codeSize += r["jit_code_size(bytes)"];
  }
  return { microseconds: microseconds / CNT, bytes: codeSize / CNT };
}

interface BenchResult {
  time: number;
  size: number;
}

type R = Record<WasmCompilerMode, Record<Exclude<CaseMode, "baseline">, BenchResult>>;
export async function run(): Promise<R> {
  const results: R = {
    active: {
      O3: { time: 0, size: 0 },
      Oz: { time: 0, size: 0 },
    },
    passive: {
      O3: { time: 0, size: 0 },
      Oz: { time: 0, size: 0 },
    },
  };

  const converter = (output: BenchOutput, baseline: BenchOutput): BenchResult => {
    return { time: baseline.microseconds / output.microseconds, size: baseline.bytes / output.bytes };
  };

  const activeBaseline = await runBench("active", "baseline");
  results["active"]["Oz"] = converter(await runBench("active", "Oz"), activeBaseline);
  results["active"]["O3"] = converter(await runBench("active", "O3"), activeBaseline);

  const passiveBaseline = await runBench("passive", "baseline");
  results["passive"]["Oz"] = converter(await runBench("passive", "Oz"), passiveBaseline);
  results["passive"]["O3"] = converter(await runBench("passive", "O3"), passiveBaseline);

  return results;
}
