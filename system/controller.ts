import { UserModel } from './models.ts';
import { LayerService } from './service.ts';
import type { Context } from '@oak/oak';

export class LayerController {
	private service: LayerService;
	constructor(service: LayerService) {
		this.service = service;
	}

	createUser = async (ctx: Context) => {
		const bodyReq = (await ctx.request.body.json()) as UserModel;
		this.service.createUser(bodyReq);
		ctx.response.status = 201;
		ctx.response.body = 'user created';
	};

	getUserList = async (ctx: Context) => {
		let userList = this.service.getUserList();
		ctx.response.status = 200;
		ctx.response.body = userList;
	};

	editUser = async (ctx: Context) => {};

	deleteUser = async (ctx: Context) => {};
}
