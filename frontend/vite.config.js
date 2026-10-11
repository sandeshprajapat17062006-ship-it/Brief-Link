import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import taiwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), taiwindcss()],
  server : {
    proxy :{
      "/api" : "http://localhost:3000"
    }
  }
});
