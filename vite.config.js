import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/gsap-drag-box/",
  // base: "https://github.com/Vikas94a/gsap-drag-box.git",
});
