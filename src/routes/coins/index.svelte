<script lang="ts">
	import { currentPageStore } from '$stores/current-page-store';
	import { onMount } from 'svelte';

	export let container = 'default-container';

	onMount(() => {
		currentPageStore.set('Coins');
	});
</script>

<div class={container}>
	<h1 class="text-3xl font-bold">Coins</h1>
</div>
