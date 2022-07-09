import mongoose from 'mongoose';
import config from 'config';

async function connect() {
	const dbUri = config.get<string>('dbUri');

	try {
		await mongoose.connect(dbUri);
		console.log('connection to database successful!');
	} catch (e) {
		console.error('could not connect to database...');
		process.exit(1);
	}
}
export default connect;
