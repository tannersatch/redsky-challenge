<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	export interface MultiButtonWrapperProps extends HTMLAttributes<HTMLDivElement> {
		children: any;
	}

	let { children, ...divProps }: MultiButtonWrapperProps = $props();
</script>

<div {...divProps}>
	{@render children()}
</div>

<style>
	@import 'tailwindcss/theme';

	div {
		display: flex;
		gap: 10px;
	}
</style>
