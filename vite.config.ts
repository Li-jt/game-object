import {defineConfig} from 'vite'
import vueJsx from '@vitejs/plugin-vue-jsx'
import vue from '@vitejs/plugin-vue'
import {fileURLToPath} from "node:url";

// https://vite.dev/config/
export default defineConfig({
  publicDir: 'game-object',
  plugins: [
      vue(),
    vueJsx()
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
})
