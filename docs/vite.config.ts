import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/', // Set base path to root
  plugins: [react()],
  build: {
    outDir: 'docs', // Output the build files into the 'docs' folder
  },
});
