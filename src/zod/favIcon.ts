import { z } from 'zod';
import { mediaSchema } from './media';

export const favIconSchema = mediaSchema;

export type FavIconProps = z.infer<typeof favIconSchema>;
