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
		@apply flex w-full max-w-[972px] flex-col self-center;
	}
</style>
