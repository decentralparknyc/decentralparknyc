# Decentral Park Landing Page

## Current production site (verified September 28, 2026)

The live [decentralpark.nyc](https://decentralpark.nyc/) site is a static export
served by GitHub Pages from
[`decentralparknyc/decentralparklanding`](https://github.com/decentralparknyc/decentralparklanding),
not the Vercel project linked in the historical notes below. Its deployed
`index.html` and homepage JavaScript matched that repository's `main` commit
`6fb0ae9eec6eaefab6209ba0de1de9c15f0e0233` byte-for-byte when checked.

The matching source design is on this repository's `redesign/ui-kit` branch
(`fb6d5b25754ccc53c85a2f36cc83119da605e4f2` before the Poa pilot addition),
including the mobile-menu fixes. Content, compiled behavior, and public assets
match; the deployed export does not record an exact source commit. Do not build from the older `main` design and
overwrite the live site.

### Build and check

Use Node 22 and `npm ci`, then `npm run build`. The static site is generated in
`out/`, with directory-style routes, the custom-domain `CNAME`, and `.nojekyll`.
Run `npm run test:export` after building to verify the crawlable pilot links,
join destination, static assets, and preserved Pages domain files. Type-check
separately with `npx tsc --noEmit`; the inherited Next configuration skips this
during builds.

Review and browser-test the generated export before proposing its contents to
the Pages repository. Publishing to that repository is a separate deployment
step; building this source alone does not update the public site. Keep its
`.git` directory intact, and do not hand-edit generated React HTML or bundles.

The pilot content lives in `components/poa-pilot.tsx`; task availability belongs
in Poa rather than a hardcoded count on this website.

## Historical Vercel / v0 setup

*Automatically synced with your [v0.dev](https://v0.dev) deployments*

[![Deployed on Vercel](https://img.shields.io/badge/Deployed%20on-Vercel-black?style=for-the-badge&logo=vercel)](https://vercel.com/breadcoop/v0-decentral-park-landing-page)
[![Built with v0](https://img.shields.io/badge/Built%20with-v0.dev-black?style=for-the-badge)](https://v0.dev/chat/projects/pIQNLdelZlb)

## Overview

This repository will stay in sync with your deployed chats on [v0.dev](https://v0.dev).
Any changes you make to your deployed app will be automatically pushed to this repository from [v0.dev](https://v0.dev).

## Deployment

Your project is live at:

**[https://vercel.com/breadcoop/v0-decentral-park-landing-page](https://vercel.com/breadcoop/v0-decentral-park-landing-page)**

## Build your app

Continue building your app on:

**[https://v0.dev/chat/projects/pIQNLdelZlb](https://v0.dev/chat/projects/pIQNLdelZlb)**

## How It Works

1. Create and modify your project using [v0.dev](https://v0.dev)
2. Deploy your chats from the v0 interface
3. Changes are automatically pushed to this repository
4. Vercel deploys the latest version from this repository
