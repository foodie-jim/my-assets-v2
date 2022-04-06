<script lang="ts">
	import Chart from 'chart.js/auto';
	import type { ChartType } from 'chart.js/auto';
	import { onMount } from 'svelte';

	export const data = null;

	const config = {
		type: 'line' as ChartType,
		data: {
			labels: ['January', 'February', 'March', 'April', 'May', 'June'],
			datasets: [
				{
					label: 'My First dataset',
					backgroundColor: 'rgb(255, 99, 132)',
					borderColor: 'rgb(255, 99, 132)',
					data: [0, 10, 5, 2, 20, 30, 45]
				}
			]
		}
	};

	let lineChart = null;

	onMount(() => {
		lineChart = new Chart(document.getElementById('line-chart') as HTMLCanvasElement, config);
	});
</script>

<div>
	<canvas id="line-chart" />
</div>
