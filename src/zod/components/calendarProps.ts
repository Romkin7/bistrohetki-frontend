import z from 'zod';
import { localeSchema } from '../locale';

export const calendarPropsSchema = z.object({
    locale: localeSchema,
    date: z.date(),
});

export type calendarProps = z.infer<typeof calendarPropsSchema>;
