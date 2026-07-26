import z from 'zod';
import { localeSchema } from '../locale';

export const daysPropsSchema = z.object({
    date: z.date(),
    locale: localeSchema,
});

export type DaysProps = z.infer<typeof daysPropsSchema>;
