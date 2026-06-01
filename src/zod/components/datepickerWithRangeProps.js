import z from 'zod';
import { localeSchema } from '../locale';
export const datepickerWithRangePropsSchema = z.object({
    ariaLabel: z.string(),
    dateField: z.object(),
    locale: localeSchema,
    date: z.date(),
    dfrom: z.date(),
    dto: z.date(),
});
//# sourceMappingURL=datepickerWithRangeProps.js.map