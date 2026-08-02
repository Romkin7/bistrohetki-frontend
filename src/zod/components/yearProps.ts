import z from 'zod';

import { calendarPropsSchema } from './calendarProps';

export const yearPropsSchema = calendarPropsSchema;

export type YearProps = z.infer<typeof yearPropsSchema>;
