<script context="module">
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
	import { navigating } from '$app/stores';
	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
	import Toast from '$components/toast.svelte';
	import PageTransition from '$components/page-transition.svelte';
	import '$src/app.css';

	export let url;
</script>

<svelte:head>
	<title>my-assets</title>
</svelte:head>

{#if $navigating}
	<div class="absolute z-50 top-0 bottom-0 w-full h-full overflow-hidden bg-slate-600 opacity-50 grid place-content-center">
		<svg xmlns="http://www.w3.org/2000/svg" class="h-32 w-32 animate-spin" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
			<path stroke-linecap="round" stroke-linejoin="round" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
		</svg>
	</div>
{/if}

<Header container="default-container" />
<Toast />
<PageTransition {url}>
	<slot container="default-container" />
</PageTransition>
<Footer container="default-container" />

<style></style>
