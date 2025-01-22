import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: true, // Expose to all network interfaces
    port: 5173,
  },
  build: {
    outDir: 'build', // Change output directory from 'dist' to 'build'
    emptyOutDir: true
  },
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
