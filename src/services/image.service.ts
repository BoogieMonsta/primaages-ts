import ImageModel, { ImageDocument } from '../models/image.model';
import {
	DocumentDefinition,
	FilterQuery,
	UpdateQuery,
	QueryOptions,
} from 'mongoose';

export async function createImage(input: DocumentDefinition<ImageDocument>) {
	return ImageModel.create(input);
}
export async function findImage(imgId: string) {
	return ImageModel.findOne({ id: imgId });
}
export async function findAllImages() {
	return ImageModel.find({});
}
export async function findAndUpdateImage(
	query: FilterQuery<ImageDocument>,
	update: UpdateQuery<ImageDocument>,
	options: QueryOptions
) {
	return ImageModel.findOneAndUpdate(query, update, options);
}
export async function deleteImage(query: FilterQuery<ImageDocument>) {
	return ImageModel.deleteOne(query);
}
