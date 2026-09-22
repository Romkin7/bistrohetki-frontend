import z from 'zod';

import { calendarPropsSchema } from './calendarProps';

export const yearPropsSchema = calendarPropsSchema.omit({
    bookableDays: true,
});

export type YearProps = z.infer<typeof yearPropsSchema>;
