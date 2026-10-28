# Family Chiropractic Center — website

Astro 5 + Tailwind CSS v4, static output, deployed on **Cloudflare Pages**.
Built from the Figma file *Family Chiropractic Center – Development* (Style Guide, Components, Homepage – Responsive).

## First run

```bash
npm install
npm run assets   # downloads all photos/icons from Figma into /public (run once)
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
functions/api/lead.ts      Cloudflare Pages Function that receives the form
```

Breakpoints (Tailwind defaults): base = mobile (390), `md` = 768 tablet, `lg` = 1024+ desktop (1280 / 1440).

## Lead form

`LeadForm` POSTs to `/api/lead` → `functions/api/lead.ts` validates and forwards the lead to
`LEAD_WEBHOOK_URL` (Zapier / Make / CRM), then the browser goes to `/thank-you`.
In `npm run dev` the function doesn't exist, so the form just goes to `/thank-you` (for testing).
To test the real function locally: `npm run cf:dev`.

## Deploy (Cloudflare Pages)

Dashboard: connect the repo → Framework preset **Astro**, build command `npm run build`,
output directory `dist`. Add env var `LEAD_WEBHOOK_URL` (secret) under Settings → Variables.

CLI: `npx wrangler login` then `npm run deploy`.
