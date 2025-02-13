export interface UserType {
	id: number;
	email: string;
	first_name: string;
	last_name: string;
	avatar: string;
}

export interface UserStoreType {
	users: UserType[];
}

export const userStore: UserStoreType = $state({
	users: []
});
