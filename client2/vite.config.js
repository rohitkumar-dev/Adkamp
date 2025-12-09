import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': String(import.meta.env.VITE_SERVER_API)
    }
  },
  plugins: [react(), tailwindcss(),],
})


// API=String(import.meta.env.VITE_SERVER_API)

