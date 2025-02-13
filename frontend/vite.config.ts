import tailwindcss from '@tailwindcss/vite';
import { sveltekit } from '@sveltejs/kit/vite';
import { defineConfig } from 'vite';
import path from 'path';

export default defineConfig({
	plugins: [sveltekit(), tailwindcss()],
	resolve: {
    alias: {
      $src: path.resolve('./src'),
      $components: path.resolve('./src/components'),
      $features: path.resolve('./src/features'),
      $users: path.resolve('./src/features/users'),
    }
  }
});
