<script>
	import { onMount } from 'svelte';
	let map;
	let center = [41.4, 72.77];
	let zoom = 6;
	const createMap = () => {
		map = L.map('map').setView(center, zoom);
		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution:
				'&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
		}).addTo(map);
	};
    onMount (() => {
        createMap()
    })
</script>


<div style="height: 200px" class="map" id="map">
	<slot />
</div>