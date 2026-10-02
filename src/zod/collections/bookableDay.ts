import { z } from 'zod';

export const bookableDaySchema = z.object({
    date: z.string(),
    bookable_times: z.array(z.object()).optional(),
    weekday: z.string(),
    opensAt: z.string(),
    closesAt: z.string(),
    isClosed: z.boolean(),
});

export type BookableDay = z.infer<typeof bookableDaySchema>;
