import z from 'zod';
import { localeSchema } from '../locale';

export const calendarPropsSchema = z.object({
    locale: localeSchema,
    selectedDate: z.date().nullable(),
    today: z.date(),
});

export type calendarProps = z.infer<typeof calendarPropsSchema>;
