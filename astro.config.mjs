// @ts-check
import { defineConfig } from 'astro/config';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages serves this site via a custom domain, so `base` stays unset.
  site: 'https://opengamingcollective.org',
  devToolbar: {
    enabled: false
  }
});
