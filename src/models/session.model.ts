import mongoose from 'mongoose';
import config from 'config';
import bcrypt from 'bcrypt';
import { UserDocument } from './user.model';

export interface SessionDocument extends mongoose.Document {
	user: UserDocument['_id'];
	valid: boolean;
}

const sessionSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	valid: { type: Boolean, default: true },
});

const SessionModel = mongoose.model<SessionDocument>('Session', sessionSchema);

export default SessionModel;