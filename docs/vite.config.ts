import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/portfolio-pages/',
  plugins: [react()],
  build: {
    outDir: 'dist',
  },
})