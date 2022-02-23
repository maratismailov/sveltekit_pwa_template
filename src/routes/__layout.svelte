<script>
	import { onMount } from 'svelte'
	import { browser, dev } from '$app/env'
	// replaced dynamically
	const date = '__DATE__'
	let ReloadPrompt
	onMount(async () => {
		!dev && browser && (ReloadPrompt = (await import('$lib/components/ReloadPrompt.svelte')).default)
	})
</script>

<svelte:head>
	{#if (!dev && browser)}
		<link rel="manifest" href="/_app/manifest.webmanifest">
	{/if}
</svelte:head>


{#if ReloadPrompt}
	<svelte:component this={ReloadPrompt} />
{/if}

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