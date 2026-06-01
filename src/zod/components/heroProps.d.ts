import z from 'zod';
export declare const heroPropsSchema: z.ZodObject<{
    backgroundImageUrl: z.ZodString;
    ariaLabel: z.ZodOptional<z.ZodString>;
}, z.z.core.$strip>;
export type HeroProps = z.infer<typeof heroPropsSchema>;
//# sourceMappingURL=heroProps.d.ts.map