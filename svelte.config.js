import adapter from '@sveltejs/adapter-auto';
import sw from 'kit-sw-workbox'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter(),
		vite: {
			plugins: [
			   sw({routes: []})
			]
		 }
	}
};

export default config;
