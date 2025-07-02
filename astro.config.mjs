import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://asalmi.com",
  experimental: {
    fonts: [
      {
        name: "Inter",
        cssVariable: "--font-inter",
        provider: fontProviders.fontsource(),
        weights: [400, 500, 600, 700],
      },
    ],
  },

  integrations: [icon(), sitemap()],
});
