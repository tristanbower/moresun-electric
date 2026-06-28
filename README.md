# MoreSun Electric — Marketing Site

A 4-page static marketing site for **MoreSun Electric**, a licensed electrical
contractor specializing in EV charging, solar, Tesla Powerwall, and
bidirectional vehicle-to-home (V2H) charging.

Built with **Next.js (App Router) + React**, fully static (SSG), deployed to
**Vercel**. Recreated pixel-faithfully from the `*.dc.html` design references;
the interactive behavior (Shop filter/quote, Contact form validation) was ported
1:1 from each reference's `<script>` block into React state.

## Pages

- `/` — Home (hero + video placeholder, mission, credentials marquee, how it
  works, V2H feature panel, testimonials, CTA)
- `/solutions` — Featured V2H, B2B dealership/developer programs, residential stack
- `/shop` — Interactive catalog: filter tabs + count, request-a-quote, floating quote pill
- `/contact` — Validated contact form with success state + details column

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
npm run build    # production build
npm start        # serve the production build
```

## Stack

- Next.js 15 / React 19 / TypeScript
- `next/font` for Archivo + Space Mono (self-hosted, no render-blocking)
- Plain CSS (design tokens + shared classes in `app/globals.css`) with inline
  style objects for one-off exact values. Hover/focus/placeholder/keyframes live
  in CSS where inline styles can't reach.
- Scroll reveals via `IntersectionObserver` with a 2.5s safety-net force-reveal;
  `prefers-reduced-motion` disables drift/marquee/parallax and shows content.

## Placeholders to replace before launch

- Phone `(000) 000-0000`, email, service area, business hours
- Hero background **video** (+ poster), all photo placeholders, the map embed
- Shop prices (illustrative estimates) and the placeholder testimonials
- **Contact form submit** — currently sets local state only; wire to a real
  backend (form API / email service / CRM) in `components/contact/ContactForm.tsx`
