# Underwriter.AI — Landing Site

The public marketing site for **Underwriter.AI**, a live credit-analyst co-pilot for
leveraged-finance diligence calls. This repository is the **landing page only** — the product
application (dashboard, deal rooms, live HUD, API, agent engine) lives in a separate repository.

Built with Next.js 16 (App Router, Turbopack) + React 19 + Tailwind v4. Static, no backend,
no environment variables required.

## Quick start

```bash
npm install
npm run dev        # http://localhost:3000
```

## Pages

| Route | Page |
|-------|------|
| `/` | Home |
| `/product` | Product overview |
| `/team` | Team |
| `/trust` | Trust & compliance posture |
| `/pilot` | Pilot / contact |
| `/faq` | FAQ |

Plus generated routes: `/icon`, `/opengraph-image`, `/robots.txt`, `/sitemap.xml`.

## Structure

```
app/
  layout.tsx              root layout (fonts, theme bootstrap, metadata)
  globals.css             Tailwind + theme tokens
  icon.tsx                generated favicon
  robots.ts, sitemap.ts   SEO routes
  (marketing)/            all landing pages + layout + opengraph image
components/marketing/      SiteNav, SiteFooter, PageHeader, BrandMark,
                           ProductMockup, LiveExampleCard
docs/                      marketing copy plans/specs
public/                    static assets
```

## Scripts

```bash
npm run dev      # dev server
npm run build    # production build (type-checked, static export)
npm start        # serve the production build
npm run lint     # eslint
```

## Environment

`NEXT_PUBLIC_SITE_URL` (optional) — the canonical site URL used for metadata and sitemap.
Defaults to `https://underwriter.ai`.
