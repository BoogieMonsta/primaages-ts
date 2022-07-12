import { object, string, TypeOf } from 'zod';

export const createUserSchema = object({
	body: object({
		password: string({
			required_error: 'the password is required',
		}).min(6, 'the password must be 6 characters minimum'),
		passwordConfirm: string({
			required_error: 'the password confirmation is required',
		}),
		email: string({
			required_error: 'the email is required',
		}).email('the email is not valid'),
	}).refine(data => data.password === data.passwordConfirm, {
		message: 'the passwords do not match!',
		path: ['passwordConfirm'],
	}),
});

export type CreateUserInput = Omit<
	TypeOf<typeof createUserSchema>,
	'body.passwordConfirm'
>;
