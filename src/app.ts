import express from 'express';
import config from 'config';
import cors from 'cors';
import connect from './utils/connect';
import routes from './routes';
import deserializeUser from './middleware/deserializeUser';

const port = config.get<number>('port');

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(deserializeUser);

app.listen(port, async () => {
	console.log(`CORS-enabled server is running at http://localhost:${port}`);
	await connect();
	routes(app);
});
