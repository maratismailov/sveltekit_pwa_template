<script>
	import { onMount } from 'svelte';

	const dev = import.meta.env.DEV;
	const browser = import.meta.env.SSR;
	onMount(() => {
		if (!dev && browser) {
			(async () => {
				if ('serviceWorker' in navigator) {
					const { Workbox, messageSW } = await import('workbox-window');
					const wb = new Workbox('/service-worker.js');
					let registration;

					// this will always activate the new build on available

					// if you want you can show a prompt to user instead
					// whether they wish to actiavte now and restart the page
					// thereby losing their current webapp state
					// or they want restart later
					const skipWaiting = (event) => {
						// fires when the waiting service worker becomes active
						wb.addEventListener('controlling', (event) => {
							window.location.reload();
						});
						// some logic to allow user to SKIP_WAITING
						// if the user accepted we skip_waiting
						if (registration?.waiting) {
							messageSW(registration.waiting, { type: 'SKIP_WAITING' });
						}
					};

					// fires when service worker has installed but is waiting to activate.
					wb.addEventListener('waiting', skipWaiting);
					//   @ts-ignore
					wb.addEventListener('externalwaiting', skipWaiting);

					wb.register().then((r) => (registration = r));
				}
			})();
		}
	});
</script>

<div class="navbar">
	<a href="/" class="active">Map</a>
	<a href="#news">News</a>
	<a href="#contact">Contact</a>
</div>

<slot />

<style>
	.navbar {
		background-color: #333;
		overflow: hidden;
		position: fixed;
		bottom: 0;
		width: 100%;
		margin-left: -8px;
	}

	/* Style the links inside the navigation bar */
	.navbar a {
		float: left;
		display: block;
		color: #f2f2f2;
		text-align: center;
		padding: 14px 16px;
		text-decoration: none;
		font-size: 17px;
	}

	/* Change the color of links on hover */
	.navbar a:hover {
		background-color: #ddd;
		color: black;
	}

	/* Add a color to the active/current link */
	.navbar a.active {
		background-color: #04aa6d;
		color: white;
	}
</style>
