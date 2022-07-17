import { Request, Response } from 'express';
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
	const update = req.body;

	const image = await findImage(imgId);
	if (!image) {
		return res.sendStatus(404);
	}

	const updatedImage = await findAndUpdateImage({ imgId }, update, {
		new: true,
	});

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
