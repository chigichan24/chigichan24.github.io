import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      // マルチページ: input は root 基準の相対パスで解決される
      input: {
        // 本体 SPA
        main: 'index.html',
        // 10周年特設サイト（独立エントリ / OGP を焼き込むため実 HTML を出力）
        anniv: '10th-anniv/index.html',
      },
    },
  },
})
