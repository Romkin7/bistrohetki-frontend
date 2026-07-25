import z from 'zod';
import { localeSchema } from '../locale';

export const monthPropsSchema = z.object({
    date: z.date(),
    locale: localeSchema,
});

export type monthProps = z.infer<typeof monthPropsSchema>;