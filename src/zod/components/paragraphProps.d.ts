import { z } from 'zod';
export declare const paragraphPropsSchema: z.ZodObject<{
    variant: z.ZodEnum<{
        body: "body";
        small: "small";
        preamble: "preamble";
    }>;
    color: z.ZodDefault<z.ZodEnum<{
        light: "light";
        dark: "dark";
        medium: "medium";
    }>>;
}, z.core.$strip>;
export type ParagraphProps = z.infer<typeof paragraphPropsSchema>;
export type ParagraphVariant = ParagraphProps['variant'];
//# sourceMappingURL=paragraphProps.d.ts.map