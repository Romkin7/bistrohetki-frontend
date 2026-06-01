import { z } from 'zod';
export declare const headingPropsSchema: z.ZodObject<{
    variant: z.ZodDefault<z.ZodEnum<{
        "title-1": "title-1";
        "title-3": "title-3";
        "display-1": "display-1";
        "display-2": "display-2";
        "title-2": "title-2";
        "title-4": "title-4";
        "title-5": "title-5";
        "title-6": "title-6";
    }>>;
    tag: z.ZodDefault<z.ZodEnum<{
        h1: "h1";
        h2: "h2";
        h3: "h3";
        h4: "h4";
        h5: "h5";
        h6: "h6";
    }>>;
    children: z.ZodAny;
    ariaLabel: z.ZodString;
    color: z.ZodDefault<z.ZodEnum<{
        light: "light";
        dark: "dark";
        medium: "medium";
    }>>;
}, z.core.$strip>;
export type HeadingProps = z.infer<typeof headingPropsSchema>;
export type HeadingVariant = HeadingProps['variant'];
export type HeadingColor = HeadingProps['color'];
export type HeadingTag = HeadingProps['tag'];
//# sourceMappingURL=headingProps.d.ts.map