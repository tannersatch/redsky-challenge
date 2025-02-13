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
		align-items: center;
		display: flex;
		flex-direction: column;
		min-height: 100vh;
	}
	.container {
		max-width: 1072px;
		display: flex;
		flex-direction: column;
		width: 100%;
	}
</style>
