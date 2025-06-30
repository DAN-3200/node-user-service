export interface UserModel {
	id: string;
	name: string;
	email: string;
	password: string; // hash password
	role: string;
	date: string;
}
