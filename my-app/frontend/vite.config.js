import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],

  server: {
    proxy: {
      '/projects': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/jobs': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
      '/education': {
        target: 'http://localhost:3000',
        changeOrigin: true,
      },
    },
  },
})
