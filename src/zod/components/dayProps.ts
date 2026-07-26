import z from 'zod';
import { calendarPropsSchema } from './calendarProps';

export const dayPropsSchema = calendarPropsSchema;

export type DayProps = z.infer<typeof dayPropsSchema>;
