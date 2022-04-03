<script lang="ts">
	import Header from '$components/header.svelte';
	import Footer from '$components/footer.svelte';
	import Toast from '$shared/toast.svelte';
	import '$src/app.css';
</script>

<svelte:head>
	<title>my-assets</title>
</svelte:head>

<Header container="default-container" />
<Toast />

<slot container="default-container" />

<Footer container="default-container" />

<style>
</style>
