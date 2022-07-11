import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import {
	createUserSessionHandler,
	getUserSessionsHandler,
	deleteUserSessionHandler,
} from './controller/session.controller';
import validateResource from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';
import { createSessionSchema } from './schema/session.schema';
import requireUser from './middleware/requireUser';
import {
	createImageSchema,
	updateImageSchema,
	readImageSchema,
	deleteImageSchema,
} from './schema/image.schema';
import {
	createImageHandler,
	updateImageHandler,
	getImageHandler,
	deleteImageHandler,
} from './controller/image.controller';

function routes(app: Express) {
	app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

	app.post('/users', validateResource(createUserSchema), createUserHandler);

	// SESSIONS
	app.post(
		'/sessions',
		validateResource(createSessionSchema),
		createUserSessionHandler
	);
	app.get('/sessions', requireUser, getUserSessionsHandler);
	app.delete('/sessions', requireUser, deleteUserSessionHandler);

	// IMAGES
	app.post(
		'/images',
		[requireUser, validateResource(createImageSchema)],
		createImageHandler
	);
	app.get('/images/:id', validateResource(readImageSchema), getImageHandler);
	app.put(
		'/images/:id',
		[requireUser, validateResource(updateImageSchema)],
		updateImageHandler
	);
	app.delete(
		'/images/:id',
		[requireUser, validateResource(deleteImageSchema)],
		deleteImageHandler
	);
}

export default routes;
