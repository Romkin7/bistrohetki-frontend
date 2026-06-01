import z from 'zod';
import { localeSchema } from '../locale';
export const daysPropsSchema = z.object({
    date: z.date(),
    startDate: z.date(),
    endDate: z.date(),
    locale: localeSchema,
});
//# sourceMappingURL=daysProps.js.map