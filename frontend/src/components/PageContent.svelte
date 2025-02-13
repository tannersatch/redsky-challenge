<script lang="ts">
	import '$src/app.css';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface PageContentProps extends HTMLAttributes<HTMLDivElement> {
		children: any;
	}

	let { children, ...divProps }: PageContentProps = $props();
</script>

<div class="content" {...divProps}>
	{@render children()}
</div>

<style>
	@import 'tailwindcss/theme';
	.content {
		align-self: center;
		max-width: 972px;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
