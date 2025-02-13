<script lang="ts">
	import Button from '$components/Button.svelte';
	import MultiButtonWrapper from '$components/MultiButtonWrapper.svelte';
	import EditUser from '$users/popups/EditUser.svelte';
	import type { UserType } from '$users/stores/userStore.svelte';
	import type { HTMLAttributes } from 'svelte/elements';
	import { deleteUser } from '../api/userApi';

	export interface UserRowProps extends HTMLAttributes<HTMLTableRowElement> {
		user: UserType;
	}

	let { user, ...trProps }: UserRowProps = $props();
</script>

<tr {...trProps}>
	<td><img src={user.avatar} alt={user.first_name} /></td>
	<td>{user.first_name}</td>
	<td>{user.last_name}</td>
	<td style="width: 100%">{user.email}</td>
	<td>
		<MultiButtonWrapper>
			<EditUser {user} />
			<Button label="Delete" size="fit" onclick={() => deleteUser(user.id)} />
		</MultiButtonWrapper>
	</td>
</tr>

<style>
	@import 'tailwindcss/theme';
	img {
		@apply h-10 w-10;
	}

	td:first-child {
		@apply flex justify-center;
	}

	td {
		@apply border-(--color-gray) border-t p-[4px] pb-[9px] pl-[16px] pr-[16px] pt-[9px];
	}
</style>
