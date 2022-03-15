<script>
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
	import '$src/app.css';
</script>

<Header />
<main>
	<slot />
</main>
<Footer />

<style>
</style>
