import { Request, Response } from 'express';
import { omit } from 'lodash';
import { CreateUserInput } from '../schema/user.schema';
import { createUser } from '../services/user.service';

export async function createUserHandler(
	req: Request<{}, {}, CreateUserInput['body']>,
	res: Response
) {
	try {
		const user = await createUser(req.body);
		return res.send(omit(user.toJSON(), 'password'));
	} catch (e: any) {
		console.error(e);
		return res.status(409).send(e.message);
	}
}
