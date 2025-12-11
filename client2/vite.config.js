import { defineConfig, loadEnv } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default ({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const apiTarget = env.VITE_SERVER_API || ''
  const proxy = apiTarget
    ? {
        '/api': {
          target: apiTarget,
          changeOrigin: true,
          secure: false,
        },
      }
    : undefined

  return defineConfig({
    server: {
      proxy,
    },
    plugins: [react(), tailwindcss()],
  })
}

