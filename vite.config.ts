import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { analyzer } from "vite-bundle-analyzer";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths(), analyzer()],
  server: {
    port: 3000,
    host: true,
    proxy: {
      '/api': {
        target: 'http://localhost:1337',
        changeOrigin: true,
        secure: false,
      },
    },
  },
  // ...останалата конфигурация
  build: {
    // Optimize bundle splitting, goes into rollupOptions
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React ecosystem
          react: ["react", "react-dom", "react-router"],
        },
      },
    },
    // Source maps for production debugging (optional)
    sourcemap: false,
    // chunk size limit
    chunkSizeWarningLimit: 1000,
    // Enable gzip compression
    reportCompressedSize: true,
  },
});
