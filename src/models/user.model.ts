import config from 'config';

const User = {
	email: { type: String, required: true, unique: true },
	name: { type: String, required: true },
	password: { type: String, required: true },
};

export default User;
