import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/', // Base path for GitHub Pages user site (username.github.io)
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
    emptyOutDir: true, // Nettoie le dossier de sortie avant la compilation
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
  server: {
    open: true
  }
})
