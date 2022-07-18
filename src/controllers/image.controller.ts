import { Request, Response } from 'express';
import { omit } from 'lodash';
import {
	CreateImageInput,
	ReadImageInput,
	UpdateImageInput,
	DeleteImageInput,
} from '../schema/image.schema';
import {
	createImage,
	findAndUpdateImage,
	findImage,
	deleteImage,
	findAllImages,
} from '../services/image.service';

export async function createImageHandler(
	req: Request<{}, {}, CreateImageInput['body']>,
	res: Response
) {
	const body = req.body;

	// TODO: wrap next line with try-catch
	const image = await createImage(body);

	return res.send(image);
}

export async function updateImageHandler(
	req: Request<UpdateImageInput['params']>,
	res: Response
) {
	const imgId = req.params.id;
	const description = req.body.metadata.description;

	// TODO: don't delete doc before safely replacing it
	const image = await findImage(imgId);
	if (!image) {
		return res.sendStatus(404);
	} else await deleteImage({ id: imgId });

	console.log('image fetched: ', image);
	console.log(description);

	image.metadata.description = description;
	console.log('image after mod: ', image);

	const update = omit(image, '__v', '_id', 'id');
	console.log('image update: ', update);

	const updatedImage = await createImage(update);

	return res.send(updatedImage);
}

export async function getImageHandler(
	req: Request<ReadImageInput['params']>,
	res: Response
) {
	const imgId = req.params.id;
	const image = await findImage(imgId);
	if (!image) {
		return res.sendStatus(404);
	}
	return res.send(image);
}

export async function getAllImagesHandler(req: Request, res: Response) {
	const images = await findAllImages();
	if (!images) {
		return res.sendStatus(404);
	}
	return res.send(images);
}

export async function deleteImageHandler(
	req: Request<DeleteImageInput['params']>,
	res: Response
) {
	const imgId = req.params.id;

	const image = await findImage(imgId);
	if (!image) {
		return res.sendStatus(404);
	}

	await deleteImage({ imgId });

	return res.sendStatus(200);
}
