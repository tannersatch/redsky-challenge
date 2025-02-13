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
		@apply bg-(--color-opaque) fixed inset-0 z-10;
	}

	.popup {
		@apply mx-auto mb-5 mt-5 flex h-[563px] w-[672px] flex-col bg-white;
	}

	.title {
		@apply bg-(--color-primary) flex p-6;
		h2 {
			@apply text-white;
		}
	}

	.content {
		@apply flex flex-grow flex-col p-5;
	}
</style>
