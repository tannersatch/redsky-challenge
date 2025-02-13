export interface Toast {
	message: string;
}

export interface ToastStoreType {
	toasts: Toast[];
}

export const toastStore: ToastStoreType = $state({
	toasts: []
});
