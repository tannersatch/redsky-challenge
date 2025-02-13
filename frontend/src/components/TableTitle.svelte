<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	export interface TableTitleProps extends HTMLAttributes<HTMLDivElement> {
		children: any;
	}

	let { children, ...divProps }: TableTitleProps = $props();
</script>

<div class="table-title" {...divProps}>
	<h2>{@render children()}</h2>
</div>

<style>
	@import 'tailwindcss/theme';
	.table-title {
		@apply bg-(--color-primary) w-full p-[4px] pb-[9px] pl-[16px] pr-[16px] pt-[9px];
		h2 {
			@apply text-white;
		}
	}
</style>
