# Open Gaming Collective Website

Site for <https://opengamingcollective.org>, built with Astro and deployed to GitHub Pages.

## Stack

- Astro 6 (static output)
- Single direct dependency: `astro`
- GitHub Pages Actions workflow using the current Pages action line

## Local Development

```bash
pnpm install
pnpm run dev
```

Use Node 22.12.0 or newer.

## Build

```bash
pnpm run build
```

## Governance Content

The governance page is built from a versioned local snapshot at `src/content/governance/index.md`.

Refresh that snapshot from the upstream governance repository with:

```bash
pnpm run sync:governance
```

This keeps production builds deterministic while preserving the upstream source of truth.

## Analytics (Plausible)

Plausible is loaded in [`src/layouts/Layout.astro`](src/layouts/Layout.astro) using the current site-specific Fyra Labs loader.

- `PUBLIC_PLAUSIBLE_SRC` overrides the loader URL when the Plausible dashboard rotates the snippet.

Current default:

```html
<script
  async
  src="https://plausible.fyralabs.com/js/pa-Av8t5p_IhtWvSrWMuykqq.js"
></script>
```

## Deployment

Pushes to `main` trigger [`.github/workflows/deploy.yml`](.github/workflows/deploy.yml), which:

1. Installs dependencies with `pnpm install --frozen-lockfile`
2. Audits production dependencies with `pnpm audit --prod`
3. Builds the site with `pnpm run build`
4. Uploads the generated `dist/` artifact
5. Deploys to GitHub Pages

The production target is the custom domain, not the repository Pages path. Astro is configured with `site: https://opengamingcollective.org` and no `base`, which is the documented setup for a GitHub Pages custom domain.

Custom domain is handled via [`public/CNAME`](public/CNAME), plus the GitHub Pages repository settings and DNS records for the apex domain.
