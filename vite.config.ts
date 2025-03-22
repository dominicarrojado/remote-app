import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { federation } from '@module-federation/vite';
import tailwindcss from '@tailwindcss/vite';
import { dependencies } from './package.json';

// https://vite.dev/config/
export default defineConfig(({ mode }) => {
  const isProd = mode === 'production';

  return {
    base: isProd ? '/remote-app/' : '/',
    build: {
      target: 'chrome89',
    },
    plugins: [
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
        },
      }),
      react(),
      tailwindcss(),
    ],
  };
});
