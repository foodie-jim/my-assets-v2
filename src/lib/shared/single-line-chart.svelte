<script lang="ts">
	import Chart from 'chart.js/auto';
	import type { ChartType } from 'chart.js/auto';
	import { onMount } from 'svelte';
	import { validate_each_argument } from 'svelte/internal';

	export let lineData = {
		meta: {
			symbol: ''
		}
	};

	let lineChart = null;

	onMount(() => {
		const config = generateConfig(lineData);
		lineChart = new Chart(
			document.getElementById(`line-chart-${lineData.meta.symbol}`) as HTMLCanvasElement,
			config
		);
	});

	const generateConfig = (data) => {
		const dataset = data.quotes.reduce((acc, cur) => {
			acc.push({ x: cur.date, y: cur.close });
			return acc;
		}, []);
		const dataGranularity = data.meta.dataGranularity;
		const config = {
			type: 'line' as ChartType,
			data: {
				datasets: [
					{
						label: data.meta.symbol,
						backgroundColor: 'rgba(37, 99, 235, 0.25)',
						borderColor: 'rgb(37, 99, 235)',
						pointBackgroundColor: 'rgb(102, 126, 234)',
						fill: true,
						cubicInterpolationMode: 'monotone',
						data: dataset
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
						time: {
							
						}
					}
				}
			}
		};

		return config;
	};
</script>

<div>
	<canvas id="line-chart-{lineData.meta.symbol}" class="bg-slate-100 dark:bg-slate-800" />
</div>
