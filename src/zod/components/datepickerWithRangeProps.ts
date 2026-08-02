import z from 'zod';
import { localeSchema } from '../locale';
import { calendarPropsSchema } from './calendarProps';

export const datepickerWithRangePropsSchema = z
    .object({
        ariaLabel: z.string(),
        locale: localeSchema,
    })
    .merge(calendarPropsSchema);

export type DatepickerWithRangeProps = z.infer<
    typeof datepickerWithRangePropsSchema
>;
