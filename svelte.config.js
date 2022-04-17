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
					$src: path.resolve('./src'),
					$lib: path.resolve('./src/lib'),
					$components: path.resolve('./src/lib/components'),
					$stores: path.resolve('./src/lib/stores')
				}
			}
		},
	}
};

export default config;
