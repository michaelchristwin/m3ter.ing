import { defineConfig } from "@solidjs/start/config";
import tailwindcss from "@tailwindcss/vite";
import { setupPlugins } from "@responsive-image/vite-plugin";

export default defineConfig({
  vite: {
    plugins: [
      tailwindcss(),
      setupPlugins({
        include: /^[^?]+\.webp\?.*responsive.*$/,
      }),
    ],
  },
});
