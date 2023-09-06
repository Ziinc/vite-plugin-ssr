// vite.config.js
import { resolve } from 'path'
import { defineConfig } from 'vite'
import { builtinModules } from 'module';

export default defineConfig({
  optimizeDeps: {disabled: true},
  build: {
    target: "node12",
    minify: false,
    outDir: "dist",
    emptyOutDir: true,
    
    
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'VitePluginSaurus',
      // the proper extensions will be added
      fileName: 'index',
      
    },
    rollupOptions: {
      
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      // external: [],
      // https://github.com/vitejs/vite/issues/7821#issuecomment-1535662491
      external: [...builtinModules, ...builtinModules.map((m) => `node:${m}`), /^node:/],
      // external: ["fs", "node:fs", "node:path", "path", "module", "node:fs/promises", "node:perf_hooks", "node:process", "tty", "node:url", "node:process", "node:module"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
        },
      },
    },
  },
})