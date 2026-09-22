import { z } from 'zod';

export const bookableDaySchema = z.object({
    date: z.string(),
    times: z.array(z.string()),
    weekday: z.string().optional(),
    opensAt: z.string().optional(),
    closesAt: z.string().optional(),
    isClosed: z.boolean().optional(),
});

export type BookableDay = z.infer<typeof bookableDaySchema>;
