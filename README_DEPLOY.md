# Stacklens React Subscription Website

A Vite + React + TypeScript version of the Stacklens landing and subscription page.

## Tech

- React
- TypeScript
- Vite
- Dark gradient UI
- Tech/AI style fonts: Space Grotesk, Rajdhani, JetBrains Mono

## Run locally

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
```

## Deploy to Vercel

1. Push this folder to GitHub.
2. Import project in Vercel.
3. Framework preset: Vite.
4. Build command: `npm run build`.
5. Output directory: `dist`.

## Deploy to Netlify

1. Push this folder to GitHub or drag/drop after build.
2. Build command: `npm run build`.
3. Publish directory: `dist`.

## Replace links

In `src/main.tsx`, update:

- `marketplaceUrl`
- `proCheckoutUrl`
- `teamCheckoutUrl`

Use Razorpay, Stripe, Lemon Squeezy, Gumroad, or your own checkout page URLs.
