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
	.table-title {
		background-color: var(--color-primary);
		width: '100%';
		padding-left: 16px;
		padding-right: 16px;
		padding-top: 9px;
		padding-bottom: 9px;
		h2 {
			color: var(--color-white);
		}
	}
</style>
