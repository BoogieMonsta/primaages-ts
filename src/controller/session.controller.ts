import { Request, Response } from 'express';
import config from 'config';
import { createSession, getSessions } from '../services/session.service';
import { validatePassword } from '../services/user.service';
import { signJwt } from '../utils/jwt.utils';

export async function createUserSessionHandler(req: Request, res: Response) {
	// validate user password
	const user = await validatePassword(req.body);
	if (!user) {
		return res.status(401).send('The email or password is invalid');
	}

	// create session
	const session = await createSession(user._id);

	// create access token
	const accessToken = signJwt(
		{
			...user,
			session: session._id,
		},
		{ expiresIn: config.get('accessTokenTtl') } // Time To Live: 15 min
	);

	// create refresh token
	const refreshToken = signJwt(
		{
			...user,
			session: session._id,
		},
		{ expiresIn: config.get('accessTokenTtl') } // Time To Live: 15 min
	);

	// return access & refresh tokens
	return res.send({ accessToken, refreshToken });
}

export async function getUserSessionsHandler(req: Request, res: Response) {
	const userId = res.locals.user._id;

	const sessions = await getSessions({ user: userId, valid: true });

	return res.send(sessions);
}
