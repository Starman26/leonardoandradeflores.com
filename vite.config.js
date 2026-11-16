import { defineConfig } from "vite";
import { cpSync } from "node:fs";

// The scripts are plain (non-module) files and the images are only referenced from
// js/data.js, so Vite doesn't pick them up. Copy them into dist as they are.
const copyStatic = {
  name: "copy-static",
  closeBundle() {
    for (const dir of ["js", "assets"]) cpSync(dir, `dist/${dir}`, { recursive: true });
  },
};

export default defineConfig({
  server: { port: 5174 },
  plugins: [copyStatic],
});
