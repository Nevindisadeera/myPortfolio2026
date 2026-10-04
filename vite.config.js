import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// GitHub Pages serves the site from /myPortfolio2026/
export default defineConfig(({ command, isPreview }) => ({
  base: command === 'build' || isPreview ? '/myPortfolio2026/' : '/',
  plugins: [react(), tailwindcss()],
}))
