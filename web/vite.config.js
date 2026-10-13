import { defineConfig } from 'vite';

// En local, /api est relayé vers Azure Functions (port 7071) ou vers l'API simulée (scripts/mock-api.mjs).
export default defineConfig({
  server: {
    port: 5173,
    proxy: { '/api': { target: process.env.ETAGE_API_URL || 'http://localhost:7071', changeOrigin: true } },
  },
  build: { outDir: 'dist', chunkSizeWarningLimit: 900 },
});
