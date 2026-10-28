/**
 * POST /api/lead — called from worker/index.ts
 * Receives the $59 New Patient Special form (JSON or form-encoded),
 * validates it and forwards it to LEAD_WEBHOOK_URL (Zapier / Make / CRM) if set.
 *
 * Set the secret:  wrangler secret put LEAD_WEBHOOK_URL
 */

export interface Env {
  ASSETS: Fetcher;
  LEAD_WEBHOOK_URL?: string;
}

type Lead = {
  fullName?: string;
  phone?: string;
  email?: string;
  smsConsent?: string;
  company?: string; // honeypot
};

const json = (data: unknown, status = 200) =>
  new Response(JSON.stringify(data), { status, headers: { 'Content-Type': 'application/json' } });

export async function handleLead(request: Request, env: Env): Promise<Response> {
  const wantsJson = (request.headers.get('Accept') || '').includes('application/json');
  const type = request.headers.get('Content-Type') || '';

  let lead: Lead;
  try {
    lead = type.includes('application/json')
      ? await request.json()
      : (Object.fromEntries((await request.formData()).entries()) as Lead);
  } catch {
    return json({ error: 'Invalid request.' }, 400);
  }

  // Bots fill the hidden honeypot — pretend success.
  if (lead.company) return wantsJson ? json({ ok: true }) : Response.redirect(new URL('/thank-you', request.url).toString(), 303);

  const fullName = (lead.fullName || '').trim();
  const phone = (lead.phone || '').replace(/[^\d+]/g, '');
  const email = (lead.email || '').trim();

  if (fullName.length < 2 || phone.replace(/\D/g, '').length < 10 || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return json({ error: 'Please fill in your name, a valid phone number and email.' }, 422);
  }

  const payload = {
    fullName,
    phone,
    email,
    smsConsent: lead.smsConsent === 'yes',
    source: 'website – $59 New Patient Special',
    submittedAt: new Date().toISOString(),
  };

  if (env.LEAD_WEBHOOK_URL) {
    const res = await fetch(env.LEAD_WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    if (!res.ok) return json({ error: 'We could not save your request.' }, 502);
  } else {
    console.log('New lead (no LEAD_WEBHOOK_URL set):', payload);
  }

  return wantsJson ? json({ ok: true }) : Response.redirect(new URL('/thank-you', request.url).toString(), 303);
}
