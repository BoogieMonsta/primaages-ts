import mongoose from 'mongoose';
import config from 'config';
import bcrypt from 'bcrypt';

export interface UserDocument extends mongoose.Document {
	email: string;
	name: string;
	password: string;
	comparePassword(candidPwd: string): Promise<Boolean>;
}

const userSchema = new mongoose.Schema({
	email: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	password: { type: String, required: true },
});

userSchema.pre('save', async function (next) {
	let user = this as UserDocument;

	if (!user.isModified('password')) {
		return next();
	}

	const salt = await bcrypt.genSalt(config.get<number>('saltWorkFactor'));
	const hash = await bcrypt.hashSync(user.password, salt);
	user.password = hash;

	return next();
});

userSchema.methods.comparePassword = async function (
	candidPwd: string
): Promise<boolean> {
	const user = this as UserDocument;

	return bcrypt.compare(candidPwd, user.password).catch(e => false);
};

const UserModel = mongoose.model<UserDocument>('User', userSchema);

export default UserModel;
