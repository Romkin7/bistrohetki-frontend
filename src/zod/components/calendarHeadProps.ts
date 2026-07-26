import z from 'zod';

import { calendarPropsSchema } from './calendarProps';

export const calendarHeadPropsSchema = calendarPropsSchema;

export type calendarHeadProps = z.infer<typeof calendarHeadPropsSchema>;
