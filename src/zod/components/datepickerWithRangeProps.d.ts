import z from 'zod';
export declare const datepickerWithRangePropsSchema: z.ZodObject<{
    ariaLabel: z.ZodString;
    dateField: z.ZodObject<{}, z.z.core.$strip>;
    locale: any;
    date: z.ZodDate;
    dfrom: z.ZodDate;
    dto: z.ZodDate;
}, z.z.core.$strip>;
export type DatepickerWithRangeProps = z.infer<typeof datepickerWithRangePropsSchema>;
//# sourceMappingURL=datepickerWithRangeProps.d.ts.map