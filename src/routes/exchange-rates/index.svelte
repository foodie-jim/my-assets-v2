<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('./api/exchange-rates', {
			method: 'POST',
			body: JSON.stringify({
				from: new Date().getTime() / 1000 - 7 * 24 * 60 * 60,
				to: new Date().getTime() / 1000,
				interval: '1d'
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const body = await response.json();

		return {
			props: {
				data: body
			}
		};
	}
</script>

<script lang="ts">
	import { currentPageStore } from '$stores/current-page-store';
	import { onMount } from 'svelte';

	export let container = 'default-container';
	export let data = null;

	onMount(() => {
		currentPageStore.set('Exchange-Rates');
	});

	//TODO Shoul display chart
	
</script>

<div class={container}>
	<h1 class="text-3xl font-bold">Exchange Rates</h1>
	<p class="break-words">{JSON.stringify(data)}</p>
</div>
