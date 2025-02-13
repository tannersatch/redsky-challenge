<script lang="ts">
	import '$src/app.css';
	import type { HTMLAttributes } from 'svelte/elements';

	export interface LayoutProps extends HTMLAttributes<HTMLDivElement> {
		children: any;
	}

	let { children, ...divProps }: LayoutProps = $props();
</script>

<div class="wrapper" {...divProps}>
	<div class="container">
		{@render children()}
	</div>
</div>

<style>
	@import 'tailwindcss/theme';
	.wrapper {
		@apply flex min-h-screen flex-col items-center;
	}

	.container {
		@apply flex w-full max-w-[1072px] flex-col;
	}
</style>
