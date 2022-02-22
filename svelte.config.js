import adapter from '@sveltejs/adapter-netlify';
import sw from 'kit-sw-workbox'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			split: false
		}),
		vite: {
			plugins: [
			   sw({routes: []})
			]
		 }
	}
};

export default config;
