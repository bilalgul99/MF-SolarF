import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    proxy: {
      '/api': {
        target: 'https://mf-solar-production.up.railway.app',
        changeOrigin: true,
        secure: true,
        rewrite: (path) => path.startsWith('/api') ? path : `/api${path}`,
      }
    },
  },
  plugins: [react()],
})
