import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
import glsl from 'vite-plugin-string'

export default defineConfig({
  root: "src/",
  publicDir: "static/",
  base: "./",
  build: {
    outDir: "../dist", // Output in the dist/ folder
    emptyOutDir: true, // Empty the folder first
    sourcemap: true, // Add sourcemap
  },
  plugins: [tsconfigPaths(), glsl()],
});
