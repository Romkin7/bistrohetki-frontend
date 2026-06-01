import z from 'zod';
export declare const contactLinkSchema: z.ZodObject<{
    content: z.ZodString;
    href: z.ZodString;
    variant: z.ZodDefault<z.ZodEnum<{
        inline: "inline";
        standalone: "standalone";
        navigation: "navigation";
    }>>;
    target: z.ZodPipe<z.ZodDefault<z.ZodEnum<{
        parent: "parent";
        self: "self";
        top: "top";
        blank: "blank";
    }>>, z.ZodTransform<string, "parent" | "self" | "top" | "blank">>;
    rel: z.ZodOptional<z.ZodEnum<{
        noopener: "noopener";
        noreferrer: "noreferrer";
        nofollow: "nofollow";
    }>>;
}, z.z.core.$strip>;
export type ContactLink = z.infer<typeof contactLinkSchema>;
//# sourceMappingURL=contactLink.d.ts.map