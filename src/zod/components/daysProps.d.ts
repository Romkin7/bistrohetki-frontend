import z from 'zod';
export declare const daysPropsSchema: z.ZodObject<{
    date: z.ZodDate;
    startDate: z.ZodDate;
    endDate: z.ZodDate;
    locale: any;
}, z.z.core.$strip>;
export type DaysProps = z.infer<typeof daysPropsSchema>;
//# sourceMappingURL=daysProps.d.ts.map