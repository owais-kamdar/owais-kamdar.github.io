import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    outDir: '.', // Output the build files into the current directory (docs)
  },
});