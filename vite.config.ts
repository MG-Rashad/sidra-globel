import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  // Change to "node" so Vercel can run it natively
  nitro: { preset: "node" },
  
  tanstackStart: {
    server: { entry: "server" },
  },
});