/**
 * Cloudflare Worker entry — serves the static Astro build from `dist/`
 * and handles the lead form at POST /api/lead.
 */
import { handleLead, type Env } from './lead';

export default {
  async fetch(request, env) {
    const { pathname } = new URL(request.url);

    if (pathname === '/api/lead') {
      if (request.method !== 'POST') return new Response('Method Not Allowed', { status: 405, headers: { Allow: 'POST' } });
      return handleLead(request, env);
    }

    return env.ASSETS.fetch(request);
  },
} satisfies ExportedHandler<Env>;
