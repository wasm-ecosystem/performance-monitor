import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

function generateLists() {
  return {
    name: "generate-lists",
    generateBundle() {
      // 将JSON写入构建输出
      this.emitFile({
        type: "asset",
        fileName: "lists",
        source:
          "darwin-arm64/250923-warpo@d1b622a+wasm-compiler@58ac45f\ndarwin-arm64/251013-warpo@b9f481a+wasm-compiler@eee82e9\nlinux-x64/250923-warpo@d1b622a+wasm-compiler@58ac45f\n",
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), generateLists()],
  publicDir: "data",
  build: {
    outDir: "render-dist",
  },
});
