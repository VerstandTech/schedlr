import {defineConfig} from "vite";
import path from "pathe";

export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  build: {
    minify: 'esbuild',
    sourcemap: true,
    rollupOptions: {
      input: path.resolve('./src/index.ts'),
      output: {
        format: 'esm',
        entryFileNames: 'index.dist.js',
        dir: './'
      }
    }
  }
})
