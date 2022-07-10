import mongoose from 'mongoose';
import { v4 as uuid } from 'uuid';

export interface ImageDocument extends mongoose.Document {
	image: string;
	metadata: {
		width: number;
		height: number;
		description: string;
	};
}

const imageSchema = new mongoose.Schema({
	id: {
		type: String,
		required: true,
		unique: true,
		default: () => `img-${uuid()}`,
	},
	image: { type: String, required: true },
	metadata: {
		width: { type: Number, default: 960 },
		height: { type: Number, default: 540 },
		description: { type: String, default: '' },
	},
});

const ImageModel = mongoose.model<ImageDocument>('Image', imageSchema);

export default ImageModel;
