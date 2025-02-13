<script lang="ts">
	import Button from '$components/Button.svelte';
	import MultiButtonWrapper from '$components/MultiButtonWrapper.svelte';
	import PopUp from '$components/PopUp.svelte';
	import { createUser } from '../api/userApi';
	import type { UserType } from '../stores/userStore.svelte';

	let visible: boolean = $state(false);

	let formData: Omit<UserType, 'id'> = $state({
		first_name: '',
		last_name: '',
		email: '',
		avatar: ''
	});
</script>

<Button
	label="Create New User"
	size="large"
	style={'align-self: flex-end;'}
	onclick={() => (visible = true)}
/>
<PopUp title="Create New User" {visible}>
	<form>
		<h3>First Name</h3>
		<input type="text" bind:value={formData.first_name} />

		<h3>Last Name</h3>
		<input type="text" bind:value={formData.last_name} />

		<h3>Email Address</h3>
		<input type="email" bind:value={formData.email} />

		<h3>Avatar Image Link</h3>
		<input type="url" bind:value={formData.avatar} />
	</form>

	<!-- Action Buttons -->
	<MultiButtonWrapper style="align-self: flex-end; flex-grow: 1;">
		<Button
			label="Cancel"
			size="small"
			mode="outline"
			style={'align-self: flex-end;'}
			onclick={() => (visible = false)}
		/>
		<Button
			label="Create"
			size="small"
			style={'align-self: flex-end;'}
			onclick={() => {
				createUser({ ...formData });
				visible = false;
			}}
		/>
	</MultiButtonWrapper>
</PopUp>

<style>
	@import 'tailwindcss/theme';
</style>
