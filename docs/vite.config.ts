import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  root: '.',  // Ensure Vite starts from the correct root
  base: '/',  // Set base URL correctly
  build: {
    outDir: 'dist',  // Ensure build files go to 'dist'
    emptyOutDir: true,  // Clear previous build files
    rollupOptions: {
      input: 'index.html',  // Explicitly define entry point
    }
  }
});
