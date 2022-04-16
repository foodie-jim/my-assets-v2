<script context="module">
	export const load = async ({ url }) => ({ props: { url } });
</script>

<script lang="ts">
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

<Header container="default-container" />
<Toast />
<PageTransition {url}>
	<slot container="default-container" />
</PageTransition>
<Footer container="default-container" />

<style></style>
