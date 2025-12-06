// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import vue from '@astrojs/vue';
import svelte from '@astrojs/svelte';
import solidJs from '@astrojs/solid-js';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  site: 'https://cozy-astro.madeby.dev',
  integrations: [
    react({
      include: ['**/React*.tsx', '**/React*.jsx']
    }), 
    vue(), 
    svelte(), 
    solidJs({
      include: ['**/Solid*.tsx', '**/Solid*.jsx']
    })
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});