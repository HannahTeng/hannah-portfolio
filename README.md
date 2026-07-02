# Hannah Teng — Portfolio

Personal portfolio for **Zihan (Hannah) Teng** — Forward-Deployed Engineer & Health Data Scientist.
A scroll-driven, editorial single-page site built to double as a demonstration of frontend craft.

## Stack

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** — warm editorial design system (ivory / honey, Cormorant Garamond + Space Mono)
- **Three.js** — WebGL flowmap image-distortion hero (ping-pong FBO)
- **GSAP** + **ScrollTrigger** — line-mask reveals, scrub word-fill, count-up stats
- **Lenis** — smooth scroll
- Canvas 2D — translucent "jellyfish bell" cursor particles

All motion respects `prefers-reduced-motion`; heavy effects skip on touch / coarse pointers.

## Develop

```bash
npm install
npm run dev      # http://localhost:3000
```

## Build

```bash
npm run build
npm start
```

## Structure

- `app/` — layout, page, global styles
- `components/` — sections (Hero, About, Experience, Projects, Skills, Contact)
- `components/effects/` — `FlowmapImage` (WebGL hero) and `CanvasTrail` (cursor particles)
- `components/ui/` — reusable scroll primitives (`SplitReveal`, `Reveal`, `WordFill`, `Counter`)
- `lib/anim.ts` — GSAP/ScrollTrigger setup and text-splitting helpers
