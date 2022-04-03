<script context="module">
	import { toast } from '@zerodevx/svelte-toast';

	const toastMessage = {
		info: (message) => {
			toast.push(message, {
				theme: {
					'--toastBackground': '#4299e1',
					'--toastColor': '#4299e1',
					'--toastBarBackground': '#2b6cb0'
				}
			});
		},
		success: (message) => {
			toast.push(message, {
				theme: {
					'--toastBackground': '#48bb78',
					'--toastColor': 'black',
					'--toastBarBackground': '#2f855a'
				}
			});
		},
		error: (message) => {
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

<script>
	import { SvelteToast } from '@zerodevx/svelte-toast';

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

    //TODO Make this reactive
    let right = '60rem';
</script>

<div class="wrap" style="--toastContainerRight: {right}">
	<SvelteToast {options} />
</div>

<style>
	.wrap {
		--toastContainerTop: 6rem;
	}
</style>
