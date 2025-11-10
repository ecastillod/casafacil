import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  plugins: [react()],
  server: {
    host: "::",
    port: 8080,
    historyApiFallback: true,
    // Este middleware fuerza la redirección a index.html para las rutas de React Router
    middleware: [
      (req, res, next) => {
        if (!req.url.includes(".")) {
          req.url = "/";
        }
        next();
      },
    ],
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});