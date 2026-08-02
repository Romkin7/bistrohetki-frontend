import z from 'zod';
import { localeSchema } from '../locale';
import { calendarPropsSchema } from './calendarProps';

export const daysPropsSchema = z
    .object({
        locale: localeSchema,
    })
    .merge(calendarPropsSchema);

export type DaysProps = z.infer<typeof daysPropsSchema>;
