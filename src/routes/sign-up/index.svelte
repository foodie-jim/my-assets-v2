<script lang="ts">
	import { currentPageStore } from '$stores/current-page-store';
	import { onMount } from 'svelte';

	export let container = 'default-container';

	onMount(() => {
		currentPageStore.set('Sign-up');
	});
</script>

<div class={container}>
	<h1 class="text-3xl font-bold">Sign-up</h1>
</div>
