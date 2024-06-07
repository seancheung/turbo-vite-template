import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { resolve } from 'node:path'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), dts({ outDir: 'dist/types' })],
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'ui',
      formats: ['es'],
      fileName: (format) => `ui.${format}.js`,
    },
    rollupOptions: {
      external: ['vue'],
      output: {
        exports: 'named',
        globals: {
          vue: 'Vue',
        },
      },
    },
  },
})
