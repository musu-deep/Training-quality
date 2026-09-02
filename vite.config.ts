import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  // Relative asset paths support GitHub Pages and custom domains.
  base: './',
  plugins: [react()],
})
