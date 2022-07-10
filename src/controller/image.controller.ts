import { Request, Response } from 'express';
import { CreateImageInput, UpdateImageInput } from '../schema/image.schema';
import {
	createImage,
	findAndUpdateImage,
	findImage,
	deleteImage,
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

	const image = await findImage({ imgId });
	if (!image) {
		return res.sendStatus(404);
	}

	const updatedImage = await findAndUpdateImage({ imgId }, update, {
		new: true,
	});

	return res.send(updatedImage);
}

export async function getImageHandler(
	req: Request<UpdateImageInput['params']>,
	res: Response
) {
	const imgId = req.params.id;
	const image = await findImage({ imgId });
	if (!image) {
		return res.sendStatus(404);
	}

	return res.send(image);
}

export async function deleteImageHandler(
	req: Request<UpdateImageInput['params']>,
	res: Response
) {
	const imgId = req.params.id;

	const image = await findImage({ imgId });
	if (!image) {
		return res.sendStatus(404);
	}

	await deleteImage({ imgId });

	return res.sendStatus(200);
}
