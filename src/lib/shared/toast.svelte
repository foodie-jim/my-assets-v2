<script context="module" lang="ts">
	import { toast } from '@zerodevx/svelte-toast';

	const toastMessage = {
		info: (message: string): void => {
			toast.push(message, {
				theme: {
					'--toastBackground': '#4299e1',
					'--toastColor': '#4299e1',
					'--toastBarBackground': '#2b6cb0'
				}
			});
		},
		success: (message: string): void => {
			toast.push(message, {
				theme: {
					'--toastBackground': '#48bb78',
					'--toastColor': 'black',
					'--toastBarBackground': '#2f855a'
				}
			});
		},
		error: (message: string): void => {
			toast.push(message, {
				theme: {
					'--toastBackground': '#f56565',
					'--toastColor': 'black',
					'--toastBarBackground': '#c53030'
				}
			});
		}
	};

	export { toastMessage };
</script>

<script lang="ts">
	import { SvelteToast } from '@zerodevx/svelte-toast';
	import { onMount } from 'svelte';

	const options = {
		duration: 4000, // duration of progress bar tween to the `next` value
		initial: 1, // initial progress bar value
		next: 0, // next progress value
		pausable: false, // pause progress bar tween on mouse hover
		dismissable: true, // allow dismiss with close button
		reversed: false, // insert new toast to bottom of stack
		intro: { x: 256 }, // toast intro fly animation settings
		theme: {}, // css var overrides
		classes: [] // user-defined classes
	};

	let right: string = '10rem';
	let windowResizeEventTimer = null;

	const handleResize = () => {
		if (windowResizeEventTimer) {
			clearTimeout(windowResizeEventTimer);
		}
		windowResizeEventTimer = setTimeout(() => {
			if (window.innerWidth <= 640) {
				right = '1rem';
			} else if (window.innerWidth >= 640 && window.innerWidth < 768) {
				right = (window.innerWidth - 640) / 2 + 'px';
			} else if (window.innerWidth >= 768 && window.innerWidth < 1024) {
				right = (window.innerWidth - 640) / 2 + 'px';
			} else if (window.innerWidth >= 1024 && window.innerWidth < 1280) {
				right = (window.innerWidth - 768) / 2 + 'px';
			} else if (window.innerWidth >= 1280 && window.innerWidth < 1536) {
				right = (window.innerWidth - 1024) / 2 + 'px';
			} else if (window.innerWidth >= 1536 && window.innerWidth < 1920) {
				right = (window.innerWidth - 1280) / 2 + 'px';
			} else if (window.innerWidth >= 1920) {
				right = (window.innerWidth - 1536) / 2 + 'px';
			}
		}, 500);
	};

	onMount(() => {
		handleResize();
	});
</script>

<svelte:window on:resize={handleResize} />

<div class="wrap" style="--toastContainerRight: {right}">
	<SvelteToast {options} />
</div>

<style>
	.wrap {
		--toastContainerTop: 8.35rem;
	}
</style>
