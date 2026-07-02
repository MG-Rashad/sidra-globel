import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Change to "vercel" so Nitro creates the exact serverless files Vercel needs
  nitro: { preset: "vercel" },
  
  tanstackStart: {
    server: { entry: "server" },
  },
});