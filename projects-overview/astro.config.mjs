// @ts-check
import { defineConfig } from 'astro/config';
import path from 'path';

// https://astro.build/config
export default defineConfig({
  outDir: "../docs",
  vite: {
    resolve: {
      alias: {
        '@components': path.resolve('./src/components')
      }
    }
  }
});
