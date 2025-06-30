import type { RepoDB } from './interfaces.ts';
import type { UserModel } from './models.ts';

export class FakeRepoDB implements RepoDB {
	private FakeDatabase: UserModel[] = [];
	private countID: number = 0;

	createUser(info: UserModel): void {
		info.id = `C${this.countID++}`;
		this.FakeDatabase.push(info);
	}

	getUserList(): UserModel[] {
		return this.FakeDatabase;
	}

	editUser(info: UserModel): void {
		let userInDB = this.FakeDatabase.find((item) => item.id == info.id);
		if (userInDB == null) {
			throw new Error('Não tem elemento');
		}

		for (let i = 0; i < this.FakeDatabase.length; i++) {
			if (info.id == this.FakeDatabase[i].id) {
				this.FakeDatabase[i].name = info.name;
				this.FakeDatabase[i].email = info.email;
				this.FakeDatabase[i].password = info.password;
				this.FakeDatabase[i].role = info.role;
			}
		}
	}

	deleteUser(id: string): void {
		let userInDB = this.FakeDatabase.find((item) => item.id == id);
		if (userInDB == null) {
			throw new Error('Não tem elemento');
		}

		this.FakeDatabase = this.FakeDatabase.filter((item) => item.id !== id);
	}
}
