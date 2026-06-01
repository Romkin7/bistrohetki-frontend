import z from 'zod';
export declare const buttonPropsSchema: z.ZodObject<{
    shape: z.ZodEnum<{
        circle: "circle";
        rounded: "rounded";
        pill: "pill";
        square: "square";
    }>;
    disabled: z.ZodOptional<z.ZodDefault<z.ZodBoolean>>;
    size: z.ZodEnum<{
        s: "s";
        l: "l";
    }>;
    type: z.ZodDefault<z.ZodEnum<{
        button: "button";
        submit: "submit";
        reset: "reset";
    }>>;
    variant: z.ZodEnum<{
        light: "light";
        secondary: "secondary";
        primary: "primary";
        dark: "dark";
        medium: "medium";
    }>;
    className: z.ZodOptional<z.ZodString>;
    ariaLabel: z.ZodString;
}, z.z.core.$strip>;
export type ButtonProps = z.infer<typeof buttonPropsSchema>;
export type ButtonType = ButtonProps['type'];
//# sourceMappingURL=buttonProps.d.ts.map