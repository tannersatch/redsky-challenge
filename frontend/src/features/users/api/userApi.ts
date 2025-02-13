import { toastStore } from '$src/components/stores/toastStore.svelte';
import { userStore, type UserType } from '$users/stores/userStore.svelte';

/* ---------------------------------- READ ---------------------------------- */
export const getUsers = async () => {
	try {
		const response = await fetch('http://localhost:3000/api/v1/users');
		const userList = await response.json();
		console.debug(userList);
		userStore.users = userList.data;
	} catch (err) {
		console.error(err);
		toastStore.toasts.push({
			message: 'Unable to retrieve user list'
		});
	}
};

export const getUser = async (id: number) => {
	try {
		const response = await fetch(`http://localhost:3000/api/v1/user/${id}`);
		const user = await response.json();
		return user.data;
	} catch (err) {
		console.error(err);
		toastStore.toasts.push({
			message: 'Unable to retrieve user'
		});
	}
};

/* --------------------------------- CREATE --------------------------------- */
export const createUser = async (user: Omit<UserType, 'id'>) => {
	try {
		await fetch('http://localhost:3000/api/v1/user', {
			method: 'POST',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				...user
			})
		});
		const newUser = {
			id: userStore.users.length + 1,
			...user
		};
		userStore.users.push(newUser);
		getUsers();
		toastStore.toasts.push({
			message: `${user.first_name} ${user.last_name} created successfully`
		});
	} catch (err) {
		console.error(err);
		toastStore.toasts.push({
			message: `Unable to create user ${user.first_name} ${user.last_name}`
		});
	}
};

/* --------------------------------- UPDATE --------------------------------- */
export const updateUser = async (user: Partial<UserType> & { id: UserType['id'] }) => {
	try {
		await fetch(`http://localhost:3000/api/v1/user/${user.id}`, {
			method: 'PATCH',
			headers: {
				'Content-Type': 'application/json'
			},
			body: JSON.stringify({
				...user
			})
		});
		getUsers();
		toastStore.toasts.push({
			message: 'User updated successfully'
		});
	} catch (err) {
		console.error(err);
		toastStore.toasts.push({
			message: 'Unable to update user'
		});
	}
};

/* --------------------------------- DELETE --------------------------------- */
export const deleteUser = async (id: number) => {
	try {
		await fetch(`http://localhost:3000/api/v1/user/${id}`, {
			method: 'DELETE'
		});
		getUsers();
		toastStore.toasts.push({
			message: 'User deleted successfully'
		});
	} catch (err) {
		console.error(err);
		toastStore.toasts.push({
			message: 'Unable to delete user'
		});
	}
};
