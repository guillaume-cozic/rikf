// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://guillaume-cozic.github.io',
  base: '/rikf/',
  trailingSlash: 'ignore',
  vite: {
    plugins: [tailwindcss()]
  }
});
