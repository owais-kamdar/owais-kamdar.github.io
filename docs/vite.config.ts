import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/owais-kamdar.github.io/',
  plugins: [react()],
  css: {
    modules: {
      localsConvention: "camelCase"
    },
  },
  build: {
    outDir: 'dist',
  },
})