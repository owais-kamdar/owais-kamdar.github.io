import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/portfolio-flask/', // Add a leading slash to the base path
  plugins: [react()],
  build: {
    outDir: 'docs', // Ensure the build output goes into the 'docs' folder
  },
});
