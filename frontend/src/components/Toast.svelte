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
		@apply fixed inset-x-0 top-0 z-10 mx-auto mb-5 mt-5 flex w-[672px] flex-col;
	}

	.toast {
		@apply border-(--color-primary) mb-10 flex flex-row border bg-white shadow-md;
	}

	.title {
		@apply bg-(--color-primary) p-6;
	}

	.content {
		@apply flex flex-grow flex-col justify-center p-5;
	}

	.actions {
		@apply self-center p-5;
	}
</style>
