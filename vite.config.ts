import { defineConfig, PluginOption } from "vite";
import react from "@vitejs/plugin-react";
import fs from "node:fs";
import path from "node:path";

function listAllFiles(p: string, files: string[]) {
  for (let file of fs.readdirSync(p)) {
    const current = path.join(p, file);
    const stat = fs.statSync(current);
    if (stat.isDirectory()) {
      listAllFiles(current, files);
    } else {
      files.push(current);
    }
  }
  return files;
}

function generateLists(): PluginOption {
  const virtualModuleId = "virtual:lists";
  const resolvedVirtualModuleId = "\0" + virtualModuleId;
  const lists = listAllFiles("data", [])
    .map((l) => l.slice("data/".length))
    .join("\\n");
  return {
    name: "generate-lists-plugin",
    resolveId(id) {
      if (id === virtualModuleId) {
        return resolvedVirtualModuleId;
      }
    },
    load(id) {
      if (id === resolvedVirtualModuleId) {
        return `export const lists = "${lists}"`;
      }
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generateLists()],
  base: "/performance-monitor/",
  publicDir: "data",
  build: {
    outDir: "render-dist",
    chunkSizeWarningLimit: 1024,
  },
});
