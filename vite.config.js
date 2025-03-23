import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
  server: {
    proxy: {
      '/api': 'http://localhost:3000', // Proxy API requests
    }
  },
  base: '/',  // Ensure correct base URL for production
  build: {
    outDir: 'dist', // ✅ Build output goes to /dist
    assetsDir: 'assets', // ✅ Built assets go to /dist/assets
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    }
  }
});