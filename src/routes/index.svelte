<script lang="ts">
	import { currentPageStore } from '$stores/current-page-store';
	import { onMount } from 'svelte';

	export let container = 'default-container';

	onMount(() => {
		currentPageStore.set('Home');
	});
</script>

<div class={container}>
	<h1 class="text-3xl font-bold">Home</h1>
</div>
