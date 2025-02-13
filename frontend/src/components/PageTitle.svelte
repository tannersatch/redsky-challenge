<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	export interface TitleProps extends HTMLAttributes<HTMLHeadingElement> {
		label: string;
		hr?: boolean;
	}
	let { label, hr = true, ...h1Props }: TitleProps = $props();
</script>

<h1 {...h1Props}>
	{label.toUpperCase()}
</h1>
{#if hr}
	<hr />
{/if}

<style>
	@import 'tailwindcss/theme';
	h1 {
		@apply mt-[100px];
	}
	hr {
		@apply mb-[36px];
	}
</style>
