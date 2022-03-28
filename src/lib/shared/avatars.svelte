<script lang="ts">
	import { ComponentSize, ComponentColors, ButtonType } from '$shared/enums';

	export let type: ButtonType = ButtonType.Icon;
	export let size: ComponentSize = ComponentSize.Medium;
	export let colors: ComponentColors = ComponentColors.Primary;
</script>

<button class="{type} {size} {colors} border-0 rounded-full mx-2" on:click>
	<slot />
</button>

<style lang="postcss">
	.primary {
		@apply bg-transparent border-transparent text-slate-900 hover:text-slate-300 hover:bg-blue-900 hover:border-blue-900 ripple-bg-blue-900;
	}
	:global(.dark) .primary {
		@apply bg-transparent border-transparent text-slate-100 hover:text-slate-300 hover:bg-blue-800 hover:border-blue-800 ripple-bg-blue-800;
	}
	.lg {
		@apply h-9 w-9;
	}
	.md {
		@apply h-8 w-8;
	}
	.sm {
		@apply h-7 w-7;
	}
</style>
