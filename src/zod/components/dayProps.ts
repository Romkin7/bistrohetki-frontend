import z from 'zod';

export const dayPropsSchema = z.object({
    date: z.date(),
    startDate: z.date(),
    endDate: z.date(),
    today: z.date(),
});

export type DayProps = z.infer<typeof dayPropsSchema>;
