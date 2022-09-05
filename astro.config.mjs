import { SITE } from "./src/config.mjs";
import { defineConfig } from "astro/config";
import { fileURLToPath } from "url";
import image from "@astrojs/image";
import path from "path";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import react from "@astrojs/react";

const __dirname = path.dirname(fileURLToPath(import.meta.url));



// https://astro.build/config
export default defineConfig({
  // Astro uses this full URL to generate your sitemap and canonical URLs in your final build
  site: SITE.domain,
  base: "/",
  output: "static",
  integrations: [tailwind({
    config: {
      applyBaseStyles: false
    }
  }), sitemap(), image(), react()],
  vite: {
    resolve: {
      alias: {
        "~": path.resolve(__dirname, "./src")
      }
    }
  }
});