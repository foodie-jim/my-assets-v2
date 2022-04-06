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
	import LineChart from '$shared/line-chart.svelte';
	import { onMount } from 'svelte';

	export let container = 'default-container';
	export let data = null;

	onMount(() => {
		currentPageStore.set('Exchange-Rates');
	});

	const labels = ['January', 'February', 'March', 'April', 'May', 'June'];

	const dataTest = {
		labels: labels,
		datasets: [
			{
				label: 'My First dataset',
				backgroundColor: 'rgb(255, 99, 132)',
				borderColor: 'rgb(255, 99, 132)',
				data: [0, 10, 5, 2, 20, 30, 45]
			}
		]
	};

	//TODO Shoul display chart
</script>

<div class={container}>
	<h1 class="text-3xl font-bold">Exchange Rates</h1>
	<LineChart data={dataTest} />
	<p class="break-words">{JSON.stringify(data)}</p>
</div>
