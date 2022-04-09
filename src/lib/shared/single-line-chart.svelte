<script lang="ts">
	import Chart from 'chart.js/auto';
	import 'chartjs-adapter-date-fns';
	import type { ChartType } from 'chart.js/auto';
	import { onMount, onDestroy } from 'svelte';

	export let lineData = {
		symbol: '',
		dataGranularity: '',
		dataset: []
	};

	let lineChart = null;

	onMount(() => {
		const config = generateConfig(lineData);
		lineChart = new Chart(
			document.getElementById(`line-chart-${lineData.symbol}`) as HTMLCanvasElement,
			config
		);
	});

	onDestroy(() => {
		if (lineChart) {
			//TODO Why onDestroy is called when component is initialized in server
			lineChart.destroy();
		}
	});

	const generateConfig = (data) => {
		const config = {
			type: 'line' as ChartType,
			data: {
				datasets: [
					{
						label: data.symbol,
						backgroundColor: 'rgba(37, 99, 235, 0.25)',
						borderColor: 'rgb(37, 99, 235)',
						pointBackgroundColor: 'rgb(102, 126, 234)',
						fill: true,
						cubicInterpolationMode: 'monotone',
						data: data.datasets
					}
				]
			},
			options: {
				elements: {
					point: {
						pointStyle: 'point'
					}
				},
				scales: {
					x: {
						type: 'time',
						time: {
							unit: 'day',
							displayFormats: {
								datetime: 'MMM d, yyyy, h:mm:ss a',
								millisecond: 'h:mm:ss.SSS a',
								second: 'hh:mm:ss',
								minute: 'hh:mm',
								hour: 'ha',
								day: 'MM/dd',
								week: 'w',
								month: 'MMM yyyy',
								quarter: '[Q]Q - yyyy',
								year: 'yyyy'
							}
						}
					}
				},
				plugins: {
					legend: {
						display: false
					}
				}
			}
		};

		return config;
	};
</script>

<div>
	<canvas id="line-chart-{lineData.symbol}" class="bg-slate-100 dark:bg-slate-800" />
</div>
