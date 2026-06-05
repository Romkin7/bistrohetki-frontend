import z from 'zod';
import { localeSchema } from '../locale';

export const calendarHeadPropsSchema = z.object({
    date: z.date(),
    locale: localeSchema,
});

export type calendarHeadProps = z.infer<typeof calendarHeadPropsSchema>;
