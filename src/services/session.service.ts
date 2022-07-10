import { FilterQuery } from 'mongoose';
import SessionModel, { SchemaDocument } from '../models/session.model';

export async function createSession(userId: string): Promise<any> {
	const session = await SessionModel.create({ user: userId });

	return session.toJSON();
}

export async function getSessions(query: FilterQuery<SchemaDocument>) {
	return SessionModel.find(query).lean();
}
