# Fortress Roofing — Deno SSR site

Pure Deno stack (no Next.js, **zero npm**). Full server-side rendering via `Deno.serve` in `main.ts`.

> **Product path:** run with `deno task start`, deploy to **[Deno Deploy](https://deno.com/deploy)**.  
> **Not** a static Netlify `dist/` export. Roberto rejected static publish as the product.

## Requirements

- [Deno](https://deno.land/) 2.x

## Run locally

```bash
cd /workspace/fortress-roofing/deno-site
deno task start
# or
deno run -A main.ts
```

Server defaults to **http://127.0.0.1:8000** (`PORT` env overrides).

## Check

```bash
deno task check
# or
deno check main.ts
```

## Deploy (Deno Deploy)

1. Point Deno Deploy at this directory (`deno-site/`).
2. Entrypoint: `main.ts` (uses `Deno.serve`).
3. No build step. No `dist/`. Static assets are served live from `static/` at `/static/*`.
4. Set `PORT` if the platform requires it (Deno Deploy injects it automatically).

```bash
# Example with deployctl (optional)
deployctl deploy --project=fortress-roofing --entrypoint=main.ts
```

## Pages

| Path | Content |
|------|---------|
| `/` | Home — help-first hero, insurance teaser, faith teaser, process, proof |
| `/insurance` | How insurance works — plain steps, money talk, anti-scam, FAQ |
| `/faith` | Our faith — refuge/identity; LSB **citations only** (no invented verse bodies) |
| `/process` | Full project timeline — roles, claim handoff, aftercare |
| `/gallery` | Craft gallery — filters + project placeholders |
| `/contact` | Claim review form + call path + service area |

## Design tokens (`static/styles.css`)

| Token | Hex | Use |
|-------|-----|-----|
| Fortress Navy | `#0B1F3A` | Primary surfaces, headers |
| Warm Stone | `#F4F0E8` | Page ground |
| Sky Mist | `#D7E3EE` | Section breaks, atmosphere |
| Anchor Charcoal | `#1C1C1C` | Body text |
| Copper Crest | `#B87333` | CTAs (sparingly) |
| Quiet Gold | `#C4A574` | Faith/light accents |

Typography: **Fraunces** (display) + **Inter** (body) via Google Fonts in `lib/layout.ts`.

## Stack

- `Deno.serve` router in `main.ts` — **THE app**
- Shared chrome in `lib/layout.ts` (logo mark: `static/mark.svg`)
- Page modules in `lib/pages/`
- CSS in `static/styles.css` (no Tailwind, no npm)
- Placeholders remain labeled: `[PHONE]`, `[SERVICE AREA]`, `[LICENSE]` / `[LICENSE NOTE]`

## Deprecated / not the product

- ~~`scripts/build-static.ts`~~ — removed
- ~~Netlify `publish = "dist"`~~ — demoted in `netlify.toml`; do not use as production
- `dist/` — may exist from old builds; **not required for serving**
- Previous Next.js app: `../site-next-archive/` (archive only)

## Copy sources

Briefs and drafts live one level up: `../DESIGN_BRIEF.md`, `../PSYCHOLOGY_BRIEF.md`, `../SITE_IA_OUTLINE.md`, `../copy/*.md`.
