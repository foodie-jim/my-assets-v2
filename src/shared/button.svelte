<script>
	export let type = 'primary';
	export let size = 'lg';
	export let shape = 'rounded';
</script>

<button class="{type} {size} {shape} border-2 mx-2 px-4" on:click>
	<slot />
</button>

<style lang="postcss">
	.none {
		@apply border-transparent bg-transparent text-slate-900 mx-0 px-0 hover:bg-slate-900 hover:text-slate-300;
	}
	:global(.dark) .none {
		@apply text-slate-300 hover:bg-slate-300 hover:text-slate-900;
	}
	.primary {
		@apply border-blue-900 bg-blue-900 text-slate-300;
	}
	:global(.dark) .primary {
		@apply border-blue-600 bg-blue-600 text-slate-100;
	}
	.lg {
		@apply h-9;
	}
	.sm {
		@apply h-7;
	}
</style>
