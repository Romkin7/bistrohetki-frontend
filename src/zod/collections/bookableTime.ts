import z from 'zod';

export const bookableTimeSchema = z.object({
    date: z.string(),
    startTime: z.string(),
    capacity: z.number(),
    isBooked: z.boolean(),
    bookable_day: z
        .object({
            weekday: z.string().optional(),
            opensAt: z.string().optional(),
            closesAt: z.string().optional(),
            isClosed: z.boolean().optional(),
        })
        .nullable()
        .optional(),
});

export type BookableTime = z.infer<typeof bookableTimeSchema>;
