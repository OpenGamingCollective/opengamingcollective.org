# Open Gaming Collective Website

Site for <https://opengamingcollective.org>, built with Astro and deployed to GitHub Pages.

## Stack

- Astro 6 (static output)
- Minimal runtime dependency footprint (`astro` in production, `@astrojs/check` and `typescript` for validation)
- Standard GitHub Pages Actions workflow (`checkout`, `configure-pages`, `setup-node`, `upload-pages-artifact`, `deploy-pages`)

## Local Development

```bash
npm ci
npm run dev
```

Use `npm run check` for Astro's type and content validation.

## Build

```bash
npm run build
```

## Governance Content

The governance page is built from a versioned local snapshot at `src/content/governance/index.md`.

Refresh that snapshot from the upstream governance repository with:

```bash
npm run sync:governance
```

This keeps production builds deterministic while preserving the upstream source of truth.

## Analytics (Plausible)

Plausible is loaded in [`src/layouts/Layout.astro`](src/layouts/Layout.astro) using the current site-specific Fyra Labs loader.

- `PUBLIC_PLAUSIBLE_SRC` overrides the loader URL when the Plausible dashboard rotates the snippet.

Current default:

```html
<script async src="https://plausible.fyralabs.com/js/pa-Av8t5p_IhtWvSrWMuykqq.js"></script>
```

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. Installs dependencies with `npm ci`
2. Builds the site with `npm run build`
3. Uploads the generated `dist/` artifact
4. Deploys to GitHub Pages

The production target is the custom domain, not the repository Pages path. Astro is configured with `site: https://opengamingcollective.org` and no `base`, which is the documented setup for a GitHub Pages custom domain.

Custom domain is handled via [`public/CNAME`](public/CNAME), plus the GitHub Pages repository settings and DNS records for the apex domain.
