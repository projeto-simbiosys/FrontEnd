import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  base: './',         
  plugins: [react(), tailwindcss(),react()],
  server: {
    watch: {
      ignored: ["**/db.json"], // Ignora alterações no db.json
    },
  },
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
    },
  },
});
