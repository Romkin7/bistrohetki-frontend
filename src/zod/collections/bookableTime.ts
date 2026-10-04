import { z } from 'zod';

export const bookableTimeSchema = z.object({
    id: z.number(),
    documentId: z.string(),
    date: z.string(),
    startTime: z.string(),
    duration: z.number(),
    endTime: z.string(),
    capacity: z.number(),
    isBooked: z.boolean(),
});

export type BookableTime = z.infer<typeof bookableTimeSchema>;
