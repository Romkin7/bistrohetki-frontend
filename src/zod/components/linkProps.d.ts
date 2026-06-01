import { z } from 'zod';
export declare const linkPropsSchema: z.ZodObject<{
    href: z.ZodString;
    variant: z.ZodEnum<{
        inline: "inline";
        standalone: "standalone";
        navigation: "navigation";
    }>;
    children: z.ZodAny;
    external: z.ZodOptional<z.ZodBoolean>;
    color: z.ZodDefault<z.ZodEnum<{
        light: "light";
        dark: "dark";
        medium: "medium";
    }>>;
}, z.core.$strip>;
export type LinkProps = z.infer<typeof linkPropsSchema>;
export type LinkVariant = LinkProps['variant'];
export type LinkColor = LinkProps['color'];
//# sourceMappingURL=linkProps.d.ts.map