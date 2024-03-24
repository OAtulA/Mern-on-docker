import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
    },
    port: 5000,
    strictPort: true,
    host: true,
    origin: "http://localhost:5000",
  },
  preview: {
    host: true,
    origin: "http://localhost:5000",
    port: 5000,
    strictPort: true,
  },
});
