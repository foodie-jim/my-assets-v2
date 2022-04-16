<script>
	import { blur } from 'svelte/transition';
	export let url = '';
	const pageTransitionDuration = 500;
</script>

{#key url}
	<div
		in:blur={{ duration: pageTransitionDuration, delay: pageTransitionDuration }}
		out:blur={{ duration: pageTransitionDuration }}
	>
		<slot />
	</div>
{/key}
