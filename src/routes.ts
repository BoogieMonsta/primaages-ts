import { Express, Request, Response } from 'express';
import { createUserHandler } from './controller/user.controller';
import { createUserSessionHandler, getUserSessionsHandler } from './controller/session.controller';
import validateResource from './middleware/validateResource';
import { createUserSchema } from './schema/user.schema';
import { createSessionSchema } from './schema/session.schema';
import requireUser from './middleware/requireUser';

function routes(app: Express) {
	app.get('/healthcheck', (req: Request, res: Response) => res.sendStatus(200));
	app.post('/users', validateResource(createUserSchema), createUserHandler);
	app.post(
		'/sessions',
		validateResource(createSessionSchema),
		createUserSessionHandler
	);
    app.get('/sessions', requireUser, getUserSessionsHandler)
}

export default routes;
