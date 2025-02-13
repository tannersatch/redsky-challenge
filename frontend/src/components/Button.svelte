<script lang="ts">
	import type { HTMLAttributes } from 'svelte/elements';

	export interface ButtonProps extends HTMLAttributes<HTMLButtonElement> {
		label: string;
		size?: 'small' | 'large' | 'fit';
		mode?: 'outline' | 'solid';
		type?: 'button' | 'submit' | 'reset' | null | undefined;
		disabled?: boolean;
		onclick?: () => void;
		style?: string;
	}

	let {
		label,
		size = 'small',
		mode = 'solid',
		type = 'button',
		disabled = false,
		onclick = () => {},
		style = '',
		...buttonProps
	}: ButtonProps = $props();
</script>

<button class={`mode-${mode} size-${size}`} {onclick} {type} {disabled} {style} {...buttonProps}>
	{label.toUpperCase()}
</button>

<style>
	@import 'tailwindcss/theme';

	button.size-small {
		@apply w-[138px];
	}

	button.size-large {
		@apply w-[226px];
	}

	button.size-fit {
		@apply w-fit pl-[8px] pr-[8px];
	}

	button.mode-solid {
		@apply bg-(--color-primary) text-white;
	}

	button.mode-outline {
		@apply text-(--color-primary) border-(--color-primary) border-2 bg-white;
	}
</style>
