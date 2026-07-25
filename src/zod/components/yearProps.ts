import z from 'zod';
import { localeSchema } from '../locale';

export const yearPropsSchema = z.object({
    date: z.date(),
    locale: localeSchema,
});

export type yearProps = z.infer<typeof yearPropsSchema>;