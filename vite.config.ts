import react from '@vitejs/plugin-react'
import * as path from 'path'
import { defineConfig } from 'vite'
import dts from 'vite-plugin-dts'
import tsConfigPaths from 'vite-tsconfig-paths'
import * as packageJson from './package.json'
import { resolve } from 'node:path'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [dts(), react(), tsConfigPaths()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  build: {
    sourcemap: true,
    outDir: 'dist',
    manifest: true,
    minify: true,
    lib: {
      entry: resolve('src', 'index.ts'),
      name: 'react-toolbox',
      formats: ['es', 'cjs'],
      fileName: format => `react-toolbox.${format}.js`
    },
    rollupOptions: {
      external: [...Object.keys(packageJson.peerDependencies)],
      output: {
        // Fix issues related to `export default` when used in CJS environments (Jest).
        // Typically those kind of errors: `Er.div is not a function`.
        interop: 'compat'
      }
    }
  }
})
