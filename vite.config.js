import Vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";

export default defineConfig({
  server: {
    allowedHosts: ["*", "drunkenly-prospectless-susanna.ngrok-free.dev"],
  },
});
