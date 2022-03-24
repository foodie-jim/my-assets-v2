<script lang="ts">
	import { ComponentSize, ComponentColors, ButtonType } from '$shared/enums';

	export let type: ButtonType = ButtonType.Text;
	export let size: ComponentSize = ComponentSize.Medium;
	export let colors: ComponentColors = ComponentColors.Primary;

	// add 2 handlers
	// 	effect event default
	// 	injected handler

</script>

<button class="{type} {size} {colors} rounded mx-2 px-4" on:click>
	<slot />
</button>

<style lang="postcss">
	.none {
		@apply border-transparent bg-transparent text-slate-900 px-0 hover:bg-slate-900 hover:text-slate-300;
	}
	:global(.dark) .none {
		@apply text-slate-300 hover:bg-slate-300 hover:text-slate-900;
	}
	.primary {
		@apply bg-blue-700 text-slate-300 hover:bg-blue-900;
	}
	:global(.dark) .primary {
		@apply bg-blue-600 text-slate-100 hover:bg-blue-800;
	}
	.lg {
		@apply h-9;
	}
	.md {
		@apply h-8;
	}
	.sm {
		@apply h-7;
	}
</style>
