# CWGFunnl — Done-For-You Sales Funnels for Coaches

A conversion-focused funnel website built with Next.js 16, React 19, and SCSS. Designed for coaches, educators, and online experts who want high-converting sales funnels built and deployed fast.

---

## Pages

| Route | Description |
|---|---|
| `/` | Landing page — hero, problem/solution, how it works, pricing, testimonials, FAQ, CTA |
| `/survey` | Pre-qualification survey |
| `/schedule` | Discovery call scheduling |
| `/thank-you` | Post-submission confirmation |

---

## Pricing

| Package | Price | Delivery |
|---|---|---|
| Starter Funnel | $799 | 10 business days |
| Pro Funnel | $1,799 | 15 business days |
| Scale System | $2,599 | 20 business days |

---

## Tech Stack

- **Framework** — Next.js 16 (App Router)
- **UI** — React 19
- **Styling** — SCSS with a custom design system (variables, mixins, fluid type scale)
- **Forms** — LeadConnector (GHL) embedded form via modal popup
- **Package manager** — pnpm

---

## Project Structure

```
src/
├── app/
│   ├── page.tsx               # Landing page
│   ├── page.module.scss
│   ├── layout.tsx             # Root layout (fonts, global scripts)
│   ├── icon.svg               # Favicon
│   ├── survey/                # Survey page
│   ├── schedule/              # Scheduling page
│   └── thank-you/             # Thank you page
└── styles/
    ├── main.scss              # Entry point
    ├── abstracts/             # Variables, mixins, functions
    └── base/                  # Reset, typography, global
```

---

## Getting Started

```bash
pnpm install
pnpm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

---

## Lead Capture

The CTA modal embeds a **LeadConnector "Strategy Funnel" form** (`vlR69EFkQpiQzeoshquc`). The form script is loaded lazily via `next/script` in the root layout.

---

## Deployment

Deploy to any Node.js-compatible host (Vercel, Railway, etc.):

```bash
pnpm run build
pnpm run start
```
