// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output → deploy `dist/` to Cloudflare Pages.
// The lead form posts to a Cloudflare Pages Function in /functions/api/lead.ts.
export default defineConfig({
  site: 'https://familychiropracticcenter.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory' },
  vite: {
    plugins: [tailwindcss()],
  },
});
