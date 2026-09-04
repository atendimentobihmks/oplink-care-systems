import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    host: true,
    port: 5176,
    strictPort: false,
    watch: {
      usePolling: true,
      interval: 150
    }
  }
});
