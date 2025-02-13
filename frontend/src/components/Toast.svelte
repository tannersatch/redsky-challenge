<script lang="ts">
	import { slide } from 'svelte/transition';
	import Button from './Button.svelte';
	import { toastStore, type Toast } from './stores/toastStore.svelte';

	const removeToast = (id: number) => {
		// toast already gone
		if (id === -1) return;
		//remove toast
		toastStore.toasts = toastStore.toasts.filter((toast, index) => index !== id);
	};

	// remove toast after 5 seconds
	const onload = (node: HTMLDivElement, message: string) => {
		setTimeout(() => {
			removeToast(toastStore.toasts.findIndex((toast: Toast) => toast.message === message));
		}, 5000);
	};
</script>

<div class="toast-wrapper">
	{#each toastStore.toasts as toast, id}
		<div class="toast" transition:slide use:onload={toast.message}>
			<div class="title"></div>
			<div class="content">
				<p>{toast.message}</p>
			</div>
			<div class="actions">
				<Button label="Close" size="fit" mode="outline" onclick={() => removeToast(id)} />
			</div>
		</div>
	{/each}
</div>

<style>
	@import 'tailwindcss/theme';
	.toast-wrapper {
		position: fixed;
		left: 0;
		right: 0;
		top: 0;
		margin: 5% auto;
		width: 672px;
		display: flex;
		flex-direction: column;
		z-index: 1;
	}
	.toast {
		display: flex;
		flex-direction: row;
		background-color: var(--color-white);
		margin-bottom: 10px;
		box-shadow: 0px 5px 10px rgba(0, 0, 0, 0.5);
		border: 1px solid var(--color-primary);
	}
	.title {
		display: flex;
		background-color: var(--color-primary);
		padding: 24px;
	}
	.content {
		padding: 20px;
		display: flex;
		flex-direction: column;
		justify-content: center;
		flex-grow: 1;
	}
	.actions {
		padding: 20px;
		align-self: center;
	}
</style>
