import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  dist: "public",
  build: {
    outDir: "build"
  },
  server: {
    strictPort: true,
    hmr: {
      port: 443
    }
  }
});
