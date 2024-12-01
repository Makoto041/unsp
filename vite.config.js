import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    cssCodeSplit: true, // CSS ファイルを分割する設定
  },
  base: "/unsp/",
});
