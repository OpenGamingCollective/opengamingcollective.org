import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://opengamingcollective.org',
  devToolbar: {
    enabled: false
  },
  vite: {
    build: {
      rollupOptions: {
        onwarn(warning, defaultHandler) {
          if (
            warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
            warning.message.includes('@astrojs/internal-helpers/remote')
          ) {
            return;
          }

          defaultHandler(warning);
        }
      }
    }
  }
});
