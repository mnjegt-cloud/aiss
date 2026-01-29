
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // Ensures assets are loaded correctly on GitHub Pages
  base: './',
  build: {
    outDir: 'dist',
    emptyOutDir: true,
  }
});
