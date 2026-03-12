# Open Gaming Collective Website

Site for <https://opengamingcollective.org>, built with Astro and deployed to GitHub Pages.

## Stack

- Astro 6 (static output)
- Minimal runtime dependencies (`astro`, `marked`)
- GitHub Actions Pages deployment via `withastro/action`

## Local Development

```bash
npm ci
npm run dev
```

## Build

```bash
npm run build
```

## Analytics (Plausible)

Plausible is loaded in [`src/layouts/Layout.astro`](src/layouts/Layout.astro) using the current site-specific Fyra Labs loader.

- `PUBLIC_PLAUSIBLE_SRC` overrides the loader URL when the Plausible dashboard rotates the snippet.

Current default:

```html
<script async src="https://plausible.fyralabs.com/js/pa-Av8t5p_IhtWvSrWMuykqq.js"></script>
```

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. Installs dependencies and builds with `withastro/action`
2. Uploads the generated `dist/` artifact
3. Deploys to GitHub Pages

Custom domain is handled via [`public/CNAME`](public/CNAME).
