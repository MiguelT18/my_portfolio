// @ts-check
import { defineConfig } from "astro/config";

import tailwindcss from "@tailwindcss/vite";

import icon from "astro-icon";

// https://astro.build/config
export default defineConfig({
  devToolbar: { enabled: false },

  vite: {
    plugins: [tailwindcss()],
  },

  integrations: [
    icon({
      include: {
        "circle-flags": ["lang-es-mx", "lang-en-us", "lang-pt-br"],
        "line-md": [
          "github",
          "linkedin",
          "download-loop",
          "heart-filled",
          "text-box-multiple-twotone",
          "chat-round-dots-filled",
          "clipboard-arrow",
        ],
        "material-symbols": [
          "share",
          "computer-outline",
          "deployed-code",
          "location-on",
          "flip",
          "person",
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
