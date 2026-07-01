import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    // Keep Lovable's default internal setup working
    server: { entry: "server" },
  },
  // Pass this down to Nitro to output pure HTML/CSS/JS for cPanel
  vite: {
    nitro: {
      preset: "static",
    },
  },
});