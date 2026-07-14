import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';

export default defineConfig({
  integrations: [tailwind()],
  site: 'https://hogargallan.com', // Cambia esto por tu dominio real
  output: 'static',
});
