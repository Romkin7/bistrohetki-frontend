import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tsconfigPaths()],
  server: {
    port: 3000,
    host: true,
  },
  build: {
    // Optimize bundle splitting
    rollupOptions: {
      output: {
        manualChunks: {
          // Vendor chunk for React ecosystem
          react: ["react", "react-dom", "react-router"],
          // Chakra UI chunk
          chakra: ["@chakra-ui/react", "@emotion/react"],
          // Redux chunk
          redux: ["@reduxjs/toolkit", "react-redux", "redux"],
          // Icons chunk
          icons: ["react-icons"],
          // Other libraries
          libs: ["clsx", "react-markdown", "react-i18next"],
        },
      },
    },
    // Optimize chunk size
    chunkSizeWarningLimit: 1000,
    // Enable gzip compression
    reportCompressedSize: true,
    // Source maps for production debugging (optional)
    sourcemap: false,
  },
  // Optimize dependencies
  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "react-router",
      "@chakra-ui/react",
      "@emotion/react",
      "@reduxjs/toolkit",
      "react-redux",
    ],
  },
});
