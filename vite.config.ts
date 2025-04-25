import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path"; // Make sure path is imported
import { componentTagger } from "lovable-tagger";

const projectBasePath = '/IOSPeScienceWorkshop/';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  base: mode === 'development' ? projectBasePath: "/",
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    outDir: 'dist',
  }
}));
