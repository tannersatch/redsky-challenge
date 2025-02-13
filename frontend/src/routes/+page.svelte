<script>
	import PageContent from '$components/PageContent.svelte';
	import PageTitle from '$components/PageTitle.svelte';
	import CreateNewUser from '$features/users/popups/CreateNewUser.svelte';
	import UserTable from '$features/users/components/UserTable.svelte';
	import Toast from '$src/components/Toast.svelte';
</script>

<PageTitle label="RedSky Coding Challenge" />
<PageContent>
	<CreateNewUser />
	<br />
	<UserTable />
</PageContent>

<Toast />

<style>
	@import 'tailwindcss/theme';
</style>
