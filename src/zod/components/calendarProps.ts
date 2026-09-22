import z from 'zod';
import { bookableDaySchema } from '../collections/bookableDay';
import { localeSchema } from '../locale';

export const calendarPropsSchema = z.object({
    locale: localeSchema,
    selectedDate: z.date().nullable(),
    activeDate: z.date().nullable().optional(),
    today: z.date(),
    bookableDays: z.array(bookableDaySchema).default([]),
});

export type calendarProps = z.infer<typeof calendarPropsSchema>;
