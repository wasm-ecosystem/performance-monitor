import { spawn } from "node:child_process";

export async function cmd(cmd: string, { cwd }: { cwd?: string }) {
  return new Promise<void>((resolve, reject) => {
    const child = spawn(cmd, { shell: true, stdio: "inherit", cwd });

    child.on("error", (err) => {
      reject(err);
    });

    child.on("exit", (code) => {
      if (code !== 0) reject(`command '${cmd}' failed with exit code ${code}`);
    });
    child.on("close", () => {
      resolve();
    });
  });
}

export async function cmdWithStdout(cmd: string, { cwd }: { cwd?: string }): Promise<string> {
  return new Promise<string>((resolve, reject) => {
    const child = spawn(cmd, { shell: true, cwd, stdio: ["ignore", "pipe", "inherit"] });
    let stdout = "";

    if (child.stdout) {
      child.stdout.on("data", (data) => {
        stdout += data.toString();
      });
    }

    child.on("error", (err) => {
      reject(err);
    });

    child.on("exit", (code) => {
      if (code !== 0) reject(`command '${cmd}' failed with exit code ${code}`);
    });

    child.on("close", () => {
      resolve(stdout);
    });
  });
}
