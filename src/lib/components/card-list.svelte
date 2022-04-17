<script lang="ts">
	import Card from '$lib/components/card.svelte';
	import LineChart from '$components/single-line-chart.svelte';
	import { onMount, onDestroy } from 'svelte';

	export let data = [];
	let graphData = [];

	onMount(() => {
		graphData = data;
	});

	onDestroy(() => {});
</script>

<div class="grid gap-4 grid-cols-1 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-3">
	{#each graphData as lineData}
		<Card name={lineData.meta.symbol} value={lineData.meta.unit + lineData.meta.regularMarketPrice}>
			<LineChart {lineData} />
		</Card>
	{:else}
		<h1>Loading...</h1>
	{/each}
</div>
