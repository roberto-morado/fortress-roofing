# Fortress Roofing — Deno site

Pure Deno stack (no Next.js, zero npm). Replaces the archived Next app in `../site-next-archive/`.

## Requirements

- [Deno](https://deno.land/) 2.x

## Run

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

## Pages

| Path | Status |
|------|--------|
| `/` | Home (from `copy/HOME.md`) |
| `/insurance` | How insurance works (from `copy/INSURANCE.md`) |
| `/faith` | Our faith (from `copy/FAITH.md`; LSB citations, text pending Prophet) |
| `/process` | Stub |
| `/gallery` | Stub |
| `/contact` | Stub (soft CTA / form placeholder) |

## Design tokens

- Navy `#0B1F3A`
- Stone `#F4F0E8`
- Mist `#D7E3EE`
- Charcoal `#1C1C1C`
- Copper `#B87333`
- Gold `#C4A574`

## Stack notes

- `Deno.serve` router in `main.ts`
- Shared header / footer / utility bar in `lib/layout.ts`
- CSS in `static/styles.css` (no Tailwind, no npm)
- Placeholders remain for phone, service area, licenses, etc.

## Deprecated

The previous Next.js app lives at `../site-next-archive/` and is **not** the live stack.


## Deploy

Netlify publish directory: `dist` (prebuilt). Live: https://fortress-roofing.netlify.app
Repo: https://github.com/roberto-morado/fortress-roofing
