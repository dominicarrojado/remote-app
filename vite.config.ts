import { fileURLToPath } from 'url';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import tailwindcss from '@tailwindcss/vite';
import { dependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';
  const isTest = mode === 'test';

  return {
    base: isProd ? '/remote-app/' : '/',
    build: {
      target: 'chrome89',
    },
    plugins: [
      !isTest &&
        federation({
          filename: 'remoteEntry.js',
          name: 'remote',
          exposes: {
            './remote-app': './src/App.tsx',
          },
          remotes: {},
          shared: {
            react: {
              requiredVersion: dependencies.react,
              singleton: true,
            },
            '@fontsource/poppins': {
              requiredVersion: dependencies['@fontsource/poppins'],
              singleton: true,
            },
            '@fontsource/roboto': {
              requiredVersion: dependencies['@fontsource/roboto'],
              singleton: true,
            },
          },
        }),
      react(),
      tailwindcss(),
    ],
    resolve: {
      alias: [
        {
          find: '@',
          replacement: fileURLToPath(new URL('./src', import.meta.url)),
        },
        {
          find: '@assets',
          replacement: fileURLToPath(new URL('./src/assets', import.meta.url)),
        },
        {
          find: '@components',
          replacement: fileURLToPath(
            new URL('./src/components', import.meta.url)
          ),
        },
        {
          find: '@lib',
          replacement: fileURLToPath(new URL('./src/lib', import.meta.url)),
        },
      ],
    },
    test: {
      browser: {
        enabled: true,
        provider: 'playwright',
        instances: [{ browser: 'chromium' }],
      },
    },
  };
});
