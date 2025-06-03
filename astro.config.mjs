import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig, envField } from 'astro/config';

import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  output: 'server',
  security: {
    checkOrigin: false,
  },
  integrations: [
    react(),
    tailwind({
      applyBaseStyles: false,
      configFile: './tailwind.config.js',
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
  env: {
    schema: {
      DATOCMS_PUBLISHED_CONTENT_CDA_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      DATOCMS_DRAFT_CONTENT_CDA_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      DATOCMS_CMA_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      SECRET_API_TOKEN: envField.string({
        context: 'server',
        access: 'secret',
      }),
      SIGNED_COOKIE_JWT_SECRET: envField.string({
        context: 'server',
        access: 'secret',
      }),
      DRAFT_MODE_COOKIE_NAME: envField.string({
        context: 'client',
        access: 'public',
      }),
    },
    validateSecrets: true,
  },
});
