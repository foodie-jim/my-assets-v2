<script context="module">
	export async function load({ fetch }) {
		const body = await fetch('./api/yahoo-finance', {
			method: 'POST',
			body: JSON.stringify({
				from: new Date().getTime() / 1000 - 7 * 24 * 60 * 60,
				to: new Date().getTime() / 1000,
				interval: '1d'
			}),
			headers: {
				'Content-Type': 'application/json'
			}
		}).then((response) => response.json());
		return {
			props: {
				data: body.data
			}
		};
	}
</script>

<script lang="ts">
	import { currentPageStore } from '$stores/current-page-store';
	import { onMount, onDestroy } from 'svelte';
	import CardList from '$components/card-list.svelte';

	export let container = 'default-container';
	export let data = [];

	onMount(() => {
		currentPageStore.set('Exchange-Rates');
	});

	onDestroy(() => {});
</script>

<div class="{container}">
	<CardList {data}></CardList>
</div>
