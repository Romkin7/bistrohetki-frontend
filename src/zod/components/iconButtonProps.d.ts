import z from "zod";
export declare const iconButtonPropsSchema: z.ZodObject<{
    disabled: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    size: z.ZodEnum<{
        s: "s";
        l: "l";
    }>;
    className: z.ZodOptional<z.ZodString>;
    ariaLabel: z.ZodString;
}, z.z.core.$strip>;
export type IconButtonProps = z.infer<typeof iconButtonPropsSchema>;
//# sourceMappingURL=iconButtonProps.d.ts.map