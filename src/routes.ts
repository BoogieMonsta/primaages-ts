import { Express, Request, Response } from 'express';
import { createUserHandler } from './controllers/user.controller';
import {
	createSessionHandler,
	getSessionsHandler,
	deleteSessionHandler,
} from './controllers/session.controller';
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
	getAllImagesHandler,
	deleteImageHandler,
} from './controllers/image.controller';

function routes(app: Express) {
	app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));

	app.post('/users', validateResource(createUserSchema), createUserHandler);

	// SESSIONS
	app.post(
		'/sessions',
		validateResource(createSessionSchema),
		createSessionHandler
	);
	app.get('/sessions', requireUser, getSessionsHandler);
	app.delete('/sessions', requireUser, deleteSessionHandler);

	// IMAGES
	// FIXME requireUser returns forbidden
	app.post(
		'/images',
		// [requireUser, validateResource(createImageSchema)],
		validateResource(createImageSchema),
		createImageHandler
	);
	app.get('/images', getAllImagesHandler);
	app.get('/images/:id', validateResource(readImageSchema), getImageHandler);
	app.put(
		'/images/:id',
		// [requireUser, validateResource(updateImageSchema)],
		validateResource(updateImageSchema),
		updateImageHandler
	);
	app.delete(
		'/images/:id',
		// [requireUser, validateResource(deleteImageSchema)],
		validateResource(deleteImageSchema),
		deleteImageHandler
	);
}

export default routes;
