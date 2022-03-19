<script>
	export let container = 'default-container';
</script>

<div class="{container} footer">
	<p class="hidden sm:block text-bold">Author - jim_kim_</p>
	<p class="hidden sm:block">This is a Jim's Playground</p>
	<a class="link" href="mailto: hjman.kim@gmail.com">Email</a>
	<a class="link" href="https://www.linkedin.com/in/hjmankim/">LinkedIn</a>
</div>

<style lang="postcss">
	.footer {
		@apply flex justify-around border-t border-slate-900 text-sm my-4 py-2;
	}
	:global(.dark) .footer {
		@apply border-slate-300;
	}
	.link {
		@apply text-blue-700;
	}
	:global(.dark) .link {
		@apply text-blue-500;
	}
</style>
