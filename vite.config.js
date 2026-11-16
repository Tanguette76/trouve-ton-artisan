
import { defineConfig, transformWithOxc } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [
    {
      name: 'react-js-files',
      enforce: 'pre',

      async transform(code, id) {
        if (!/\/src\/.*\.js$/.test(id)) {
          return null;
        }

        return transformWithOxc(code, id, {
          lang: 'jsx',
          jsx: {
            runtime: 'automatic',
          },
        });
      },
    },
    react(),
  ],

  optimizeDeps: {
    rolldownOptions: {
      moduleTypes: {
        '.js': 'jsx',
      },
    },
  },
});
