import type { UserModel } from './models.ts';
import type { RepoDB } from './interfaces.ts';

export class LayerService {
	private repo: RepoDB;
	constructor(repository: RepoDB) {
		this.repo = repository;
	}

	createUser(info: UserModel): void {
		let modelUser: UserModel = {
			id: '',
			name: info.name,
			email: info.email,
			password: info.password,
			role: info.role,
			date: new Date().toLocaleString('pt-BR'),
		};
		this.repo.createUser(modelUser);
	}

	getUserList(): UserModel[] {
		return this.repo.getUserList();
	}

	editUser(info: UserModel): void {
		this.repo.editUser(info);
	}

	deleteUser(id: string): void {
		this.repo.deleteUser(id);
	}
}
