<script lang="ts">
	import TableTitle from '$components/TableTitle.svelte';
	import { getUsers } from '$src/features/users/api/userApi';
	import UserRow from '$users/components/UserRow.svelte';
	import { userStore } from '$users/stores/userStore.svelte';

	$effect(() => {
		getUsers();
	});
</script>

<TableTitle>User List</TableTitle>
<table>
	{#if userStore.users.length > 0}
		<thead>
			<tr>
				<th><h3>Avatar</h3></th>
				<th><h3>First Name</h3></th>
				<th><h3>Last Name</h3></th>
				<th><h3>Email Address</h3></th>
			</tr>
		</thead>
	{/if}
	<tbody>
		{#if userStore.users.length > 0}
			{#each userStore.users as user}
				<UserRow {user} />
			{/each}
		{:else}
			<tr>
				<td colspan="6" style="text-align: center; width: 100%">No users found</td>
			</tr>
		{/if}
	</tbody>
</table>

<style>
	@import 'tailwindcss/theme';
	table {
		@apply border-(--color-primary) border;
	}

	th,
	td {
		@apply whitespace-nowrap px-[16px] py-[9px] text-left;
	}
</style>
