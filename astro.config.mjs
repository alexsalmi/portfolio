import { defineConfig, fontProviders } from "astro/config";

import icon from "astro-icon";

export default defineConfig({
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

  integrations: [icon()],
});
