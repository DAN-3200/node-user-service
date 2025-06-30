import { LayerController } from './controller.ts';
import { LayerService } from './service.ts';
import { FakeRepoDB } from './repository.ts';
import { Application, Router } from '@oak/oak';

export async function runServer() {
	const app = new Application();
	const router = new Router();
	setRoutes(router);
	app.use(router.routes());
	app.use(router.allowedMethods());

	await app.listen({ port: 8000 });
}

function setRoutes(route: Router) {
	let useRepo = new FakeRepoDB();
	let useService = new LayerService(useRepo);
	let useController = new LayerController(useService);

	route.post('/createUser', useController.createUser);
	route.get('/getUserList', useController.getUserList);
	route.put('/editUser', useController.editUser);
	route.delete('/deleteUser', useController.deleteUser);
}
