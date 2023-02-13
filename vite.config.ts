import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Pages from 'vite-plugin-pages'
import { loadEnv } from 'vite'
// https://vitejs.dev/config/
const curEnv = loadEnv('', process.cwd())
export default defineConfig({
  plugins: [vue(), Pages()],
  base: curEnv.VITE_PUBLIC_PATH,
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: `@use "fast-scss" as *;`,
      },
    },
  },
  build: {
    outDir: 'docs',
  },
})
