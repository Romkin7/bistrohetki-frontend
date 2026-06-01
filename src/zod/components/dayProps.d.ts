import z from 'zod';
export declare const dayPropsSchema: z.ZodObject<{
    date: z.ZodDate;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    today: z.ZodDate;
    dayToDisplay: z.ZodNumber;
}, z.z.core.$strip>;
export type DayProps = z.infer<typeof dayPropsSchema>;
//# sourceMappingURL=dayProps.d.ts.map