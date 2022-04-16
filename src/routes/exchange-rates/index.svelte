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
				data: body.data
			}
		};
	}
</script>

<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import LineChart from '$components/single-line-chart.svelte';
	import { currentPageStore } from '$stores/current-page-store';
	import { onMount, onDestroy } from 'svelte';

	export let container = 'default-container';
	export let data = [];
	let graphData = [];

	onMount(() => {
		graphData = data;
		currentPageStore.set('Exchange-Rates');
	});

	onDestroy(() => {});
</script>

<div class="{container} grid gap-4 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3">
	{#each graphData as lineData}
		<Card name={lineData.symbol}>
			<LineChart {lineData} />
		</Card>
	{:else}
		<h1>Loading...</h1>
	{/each}
</div>
