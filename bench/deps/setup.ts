import { existsSync, mkdirSync } from "fs";
import { cmd } from "../exec.js";
import { argv } from "process";

const __dirname = "bench/deps";

async function setupWarpo() {
  if (existsSync(__dirname + "/warpo")) return;
  await cmd("git clone https://github.com/wasm-ecosystem/warpo.git --depth=100", { cwd: __dirname });
  if (argv.includes("--warpo")) {
    await cmd(`git checkout ${argv[argv.indexOf("--warpo") + 1]}`, { cwd: __dirname + "/warpo" });
  }
  await cmd("npm ci", { cwd: __dirname + "/warpo" });
  await cmd("npm ci", { cwd: __dirname + "/warpo/assemblyscript" });
  await cmd("npm run build", { cwd: __dirname + "/warpo" });
}

async function setupWasmCompiler() {
  if (existsSync(__dirname + "/wasm-compiler")) return;
  if (argv.includes("--wasm-compiler")) {
    await cmd(`git checkout ${argv[argv.indexOf("--wasm-compiler") + 1]}`, { cwd: __dirname + "/wasm-compiler" });
  }
  await cmd("git clone https://github.com/wasm-ecosystem/wasm-compiler.git --depth=100", { cwd: __dirname });
}

async function setupWasmCompilerBaseline() {
  if (existsSync(__dirname + "/wasm-compiler-baseline")) return;
  if (!existsSync(__dirname + "/wasm-compiler-3.0.3.tar.gz"))
    await cmd(
      "wget https://github.com/wasm-ecosystem/wasm-compiler/releases/download/3.0.3/wasm-compiler-3.0.3.tar.gz --quiet",
      {
        cwd: __dirname,
      }
    );
  mkdirSync(__dirname + "/wasm-compiler-baseline");
  await cmd("tar -xvf wasm-compiler-3.0.3.tar.gz -C wasm-compiler-baseline", { cwd: __dirname });
}

export async function setup() {
  await Promise.all([setupWarpo(), setupWasmCompiler(), setupWasmCompilerBaseline()]);
}
