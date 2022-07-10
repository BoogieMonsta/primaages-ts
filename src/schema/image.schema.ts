import { object, number, string, TypeOf } from 'zod';

const payload = {
	body: object({
		image: string({
			required_error: 'the image is required',
		}),
		metadata: object({
			width: number({}),
			height: number({}),
			description: string({}).max(
				140,
				'the description must be 140 characters maximum'
			),
		}),
	}),
};

const params = {
	params: object({
		id: string({
			required_error: 'the id is required',
		}),
	}),
};

export const createImageSchema = object({
	...payload,
});

export const readImageSchema = object({
    ...params,
});

export const updateImageSchema = object({
	...payload,
	...params,
});

export const deleteImageSchema = object({
	...params,
});

export type CreateImageInput = TypeOf<typeof createImageSchema>;
export type ReadImageInput = TypeOf<typeof readImageSchema>;
export type UpdateImageInput = TypeOf<typeof updateImageSchema>;
export type DeleteImageInput = TypeOf<typeof deleteImageSchema>;
