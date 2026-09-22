import z from 'zod';

import { calendarPropsSchema } from './calendarProps';

export const monthPropsSchema = calendarPropsSchema.omit({
    bookableDays: true,
});

export type MonthProps = z.infer<typeof monthPropsSchema>;
