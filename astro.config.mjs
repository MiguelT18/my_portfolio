// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        "line-md": ["github", "linkedin", "download-loop"],
        "material-symbols": [
          "translate-rounded",
          "light-mode-rounded",
          "dark-mode-rounded",
          "accessible-menu-sharp",
          "app-registration-outline",
        ],
      },
    }),
  ],
});
