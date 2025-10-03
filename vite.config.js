import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    open: true
  },
  optimizeDeps: {
    include: ['react-router-dom']
  }
})
