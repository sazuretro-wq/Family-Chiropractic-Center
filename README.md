# Family Chiropractic Center — website

Astro 5 + Tailwind CSS v4, static output, deployed as a **Cloudflare Worker** (static assets) at https://fcc.creatiqo.com.
Built from the Figma file *Family Chiropractic Center – Development* (Style Guide, Components, Homepage – Responsive).

## First run

```bash
npm install
npm run assets   # downloads all photos/icons from Figma into /public (run once)
npm run images   # makes the web-sized WebP copies the site uses (re-run after replacing a photo)
npm run dev      # http://localhost:4321
```

> `npm run assets` uses Figma export links that expire ~7 days after they were generated
> (generated 28 Oct 2026). If any link has expired, export that layer from Figma into the
> path listed in `scripts/figma-assets.json`.

## Pages

| Route | File |
|---|---|
| `/` | `src/pages/index.astro` — homepage |
| `/thank-you` | `src/pages/thank-you.astro` — after the lead form |
| `/styleguide` | `src/pages/styleguide.astro` — living style guide + component library (noindex) |
| `/privacy-policy`, `/terms` | placeholders, replace with approved copy |

## Structure

```
src/
  styles/global.css        design tokens (@theme) + typography/button classes
  data/site.ts             phone, address and all homepage copy
  components/
    ui/        Button, PhoneButton, Eyebrow, AwardBadge, TrustBadge, GoogleRatingBadge
    blocks/    SectionHeading, HeroHighlights, IncludedCard, DoctorCard, ReviewCard,
               StepItem, ServiceCard, FaqItem, LeadForm
    layout/    SiteHeader, SiteFooter
    sections/  HeroSection, TrustBar, ProblemSection, IncludedSection, DoctorsSection,
               PhotoStrip, ReviewsSection, StepsSection, ServicesSection, FaqSection, CtaSection
worker/index.ts            Worker entry: serves dist/ and routes /api/lead
worker/lead.ts             receives the lead form
```

Breakpoints (Tailwind defaults): base = mobile (390), `md` = 768 tablet, `lg` = 1024+ desktop (1280 / 1440).

## Images

The PNGs in `public/images` are the Figma sources and are not deployed (`public/.assetsignore`).
`npm run images` writes resized WebP copies next to them (hero at 640/1280/1920 px + `og-image.jpg`),
and those are what the pages reference.

## Lead form

`LeadForm` POSTs to `/api/lead` → `worker/lead.ts` validates and forwards the lead to
`LEAD_WEBHOOK_URL` (Zapier / Make / CRM), then the browser goes to `/thank-you`.
In `npm run dev` the Worker doesn't run, so the form just goes to `/thank-you` (for testing).
To test the real Worker locally: `npm run cf:dev`.

## Deploy (Cloudflare Workers)

`npx wrangler login` then `npm run deploy` (builds and runs `wrangler deploy`).
`wrangler.toml` attaches the custom domain `fcc.creatiqo.com`.
Set the webhook once with `npx wrangler secret put LEAD_WEBHOOK_URL`.
