// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Static output → served from `dist/` by the Cloudflare Worker in /worker.
// The lead form posts to /api/lead, handled in /worker/lead.ts.
export default defineConfig({
  site: 'https://familychiropracticcenter.com',
  output: 'static',
  trailingSlash: 'ignore',
  build: { format: 'directory', inlineStylesheets: 'always' },
  vite: {
    plugins: [tailwindcss()],
  },
});
