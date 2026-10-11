import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // Debe coincidir con el nombre del repositorio en GitHub.
  base: "/PixieZoneReact/",
});
