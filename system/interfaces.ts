import type { UserModel } from './models.ts';

export interface RepoDB {
	createUser(info: UserModel): void;
	getUserList(): UserModel[];
	editUser(info: UserModel): void;
	deleteUser(id: string): void;
}
