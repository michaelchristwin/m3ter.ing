import { defineConfig } from "vite";
import solid from "vite-plugin-solid";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { setupPlugins } from "@responsive-image/vite-plugin";

export default defineConfig({
  plugins: [
    solid(),
    tailwindcss(),
    setupPlugins({
      include: /^[^?]+\.webp\?.*responsive.*$/,
    }),
  ],
  resolve: {
    alias: {
      "~": path.resolve(__dirname, "./src"),
    },
  },
});
