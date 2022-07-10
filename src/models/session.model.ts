import mongoose from 'mongoose';
import config from 'config';
import bcrypt from 'bcrypt';
import { UserDocument } from './user.model';

export interface SchemaDocument extends mongoose.Document {
	user: UserDocument['_id'];
	valid: boolean;
}

const sessionSchema = new mongoose.Schema({
	user: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
	valid: { type: Boolean, default: true },
});

const SessionModel = mongoose.model('Session', sessionSchema);

export default SessionModel;
