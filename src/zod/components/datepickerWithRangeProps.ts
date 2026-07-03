import z from 'zod';
import { localeSchema } from '../locale';

export const datepickerWithRangePropsSchema = z.object({
    ariaLabel: z.string(),
    locale: localeSchema,
    date: z.date(),
    dfrom: z.date(),
    dto: z.date(),
});

export type DatepickerWithRangeProps = z.infer<
    typeof datepickerWithRangePropsSchema
>;
