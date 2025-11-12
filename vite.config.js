import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  // Ensure 'base' is set to the root path for standard hosting
  base: '/',
  plugins: [react()],
  css: {
    postcss: './postcss.config.js',
  },
  server: {
    proxy: {
      "/api": "https://odooprodfrontend.onrender.com"
    }
  }
})
