<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';
	import { fade } from 'svelte/transition';

	export interface PopUpProps extends HTMLAttributes<HTMLDivElement> {
		title: string;
		visible: boolean;
		children: any;
	}

	let { children, title, visible, ...divProps }: PopUpProps = $props();
</script>

{#if visible}
	<div class="background" transition:fade>
		<div class="popup" {...divProps}>
			<div class="title">
				<h2>{title}</h2>
			</div>
			<div class="content">
				{@render children()}
			</div>
		</div>
	</div>
{/if}

<style>
	@import 'tailwindcss/theme';
	.background {
		position: fixed;
		z-index: 1;
		left: 0;
		top: 0;
		right: 0;
		bottom: 0;
		background-color: var(--color-opaque);
	}
	.popup {
		background-color: var(--color-white);
		margin: 5% auto;
		width: 672px;
		height: 563px;
		display: flex;
		flex-direction: column;
	}
	.title {
		display: flex;
		background-color: var(--color-primary);
		padding: 24px;
		h2 {
			color: var(--color-white);
		}
	}
	.content {
		padding: 20px;
		display: flex;
		flex-direction: column;
		flex-grow: 1;
	}
</style>
