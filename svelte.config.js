import adapter from '@sveltejs/adapter-auto';
import sveltePreprocess from 'svelte-preprocess';
import path from 'path';
import tailwindcss from 'tailwindcss';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: sveltePreprocess({
		postcss: {
			plugins: [tailwindcss]
		}
	}),
	kit: {
		adapter: adapter(),
		vite: {
			resolve: {
				alias: {
					// these are the aliases and paths to them
					$src: path.resolve('./src'),
					$shared: path.resolve('./src/shared'),
					$components: path.resolve('./src/components')
				}
			}
		}
	}
};

export default config;
