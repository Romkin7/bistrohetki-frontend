import z from 'zod';

import { calendarPropsSchema } from './calendarProps';

export const monthPropsSchema = calendarPropsSchema;

export type MonthProps = z.infer<typeof monthPropsSchema>;
