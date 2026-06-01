import z from 'zod';

export const dayPropsSchema = z.object({
    date: z.date(),
    startDate: z.date(),
    endDate: z.date(),
    today: z.date(),
    dayToDisplay: z.number(),
});

export type DayProps = z.infer<typeof dayPropsSchema>;
