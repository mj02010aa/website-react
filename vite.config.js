import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";

export default defineConfig({
  plugins: [reactRefresh()],
  dist: public,
  build: {
    outDir: "build",
    dist: public
  },
  server: {
    strictPort: true,
    dist: public,
    hmr: {
      port: 443,
      dist: public
    }
  }
});
