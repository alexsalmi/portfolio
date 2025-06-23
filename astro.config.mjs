import { defineConfig, fontProviders } from "astro/config";

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
});
