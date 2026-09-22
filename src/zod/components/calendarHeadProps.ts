import z from 'zod';

import { calendarPropsSchema } from './calendarProps';

export const calendarHeadPropsSchema = calendarPropsSchema.omit({
    bookableDays: true,
});

export type calendarHeadProps = z.infer<typeof calendarHeadPropsSchema>;
