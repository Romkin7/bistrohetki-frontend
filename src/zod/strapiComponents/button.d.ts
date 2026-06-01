import z from 'zod';
export declare const strapiButtonSchema: z.ZodObject<{
    id: z.ZodNumber;
    type: z.ZodEnum<{
        button: "button";
        submit: "submit";
        reset: "reset";
    }>;
    disabled: z.ZodBoolean;
    buttonText: z.ZodString;
    ariaLabel: z.ZodString;
}, z.z.core.$strip>;
export type StrapiButton = z.infer<typeof strapiButtonSchema>;
export type StrapiButtonType = StrapiButton['type'];
//# sourceMappingURL=button.d.ts.map