import z from 'zod';
export declare const linkSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodOptional<z.ZodString>;
    content: z.ZodString;
    href: z.ZodString;
    isExternal: z.ZodDefault<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
    publishedAt: z.ZodOptional<z.ZodDate>;
    locale: z.ZodDefault<z.ZodEnum<{
        "fi-FI": "fi-FI";
        "es-ES": "es-ES";
        "en-EN": "en-EN";
    }>>;
    variant: z.ZodEnum<{
        inline: "inline";
        standalone: "standalone";
        navigation: "navigation";
    }>;
    target: z.ZodPipe<z.ZodDefault<z.ZodEnum<{
        parent: "parent";
        self: "self";
        top: "top";
        blank: "blank";
    }>>, z.ZodTransform<string, "parent" | "self" | "top" | "blank">>;
    rel: z.ZodEnum<{
        noopener: "noopener";
        noreferrer: "noreferrer";
        nofollow: "nofollow";
    }>;
}, z.z.core.$strip>;
export type Link = z.infer<typeof linkSchema>;
export type LinkVariant = Link['variant'];
//# sourceMappingURL=link.d.ts.map