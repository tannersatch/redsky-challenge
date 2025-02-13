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
		width: 138px;
	}

	button.size-large {
		width: 226px;
	}

	button.size-fit {
		width: fit-content;
		padding-left: 8px;
		padding-right: 8px;
	}

	button.mode-solid {
		@apply bg-[var(--color-primary)] text-white;
	}

	button.mode-outline {
		@apply bg-white text-[var(--color-primary)];
		border-width: 2px;
		border-color: var(--color-primary);
	}
</style>
