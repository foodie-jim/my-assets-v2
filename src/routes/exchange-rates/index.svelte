<script context="module">
	export async function load({ fetch }) {
		const response = await fetch('./api/exchange-rates', {
			method: 'POST',
			body: JSON.stringify({
				test: 'This is a test string'
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		});
		const body = await response.json();

		return {
			props: {
				data: body
			}
		};
	}
</script>

<script lang="ts">
	export let container = 'default-container';
	export let data = null;

	console.log(data);
</script>

<div class={container}>
	<h1 class="text-3xl font-bold">Exchange Rates</h1>
</div>
