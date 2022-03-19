import path from 'path';

import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import svg from '@poppanator/sveltekit-svg';
import graphql from '@rollup/plugin-graphql';


/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),
    vite: {
      resolve: {
        alias: {
          $ds: path.resolve('./src/components/ds'),
          $icons: path.resolve('./src/components/ds/iconography'),
          $components: path.resolve('./src/components'),
          $types: path.resolve('./src/types')
        }
      },
      plugins: [
        svg(),
        graphql()
      ]
    }
	}
};

export default config;
