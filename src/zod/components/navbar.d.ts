import z from 'zod';
export declare const nvabarLinkSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodOptional<z.ZodString>;
    textContent: z.ZodString;
    href: z.ZodString;
    isExternal: z.ZodDefault<z.ZodBoolean>;
    createdAt: z.ZodOptional<z.ZodDate>;
    updatedAt: z.ZodOptional<z.ZodDate>;
    publishedAt: z.ZodOptional<z.ZodDate>;
    locale: z.ZodDefault<z.ZodEnum<{
        "fi-FI": "fi-FI";
        "es-ES": "es-ES";
        "en-EN": "en-EN";
        "sv-SE": "sv-SE";
    }>>;
}, z.z.core.$strip>;
export declare const navBarSchema: z.ZodObject<{
    brandImage: any;
    title: z.ZodString;
    navbarLinks: z.ZodDefault<z.ZodArray<z.ZodObject<{
        id: z.ZodNumber;
        documentId: z.ZodOptional<z.ZodString>;
        textContent: z.ZodString;
        href: z.ZodString;
        isExternal: z.ZodDefault<z.ZodBoolean>;
        createdAt: z.ZodOptional<z.ZodDate>;
        updatedAt: z.ZodOptional<z.ZodDate>;
        publishedAt: z.ZodOptional<z.ZodDate>;
        locale: z.ZodDefault<z.ZodEnum<{
            "fi-FI": "fi-FI";
            "es-ES": "es-ES";
            "en-EN": "en-EN";
            "sv-SE": "sv-SE";
        }>>;
    }, z.z.core.$strip>>>;
    languageSelectLinks: z.ZodDefault<z.ZodArray<any>>;
    socialLinks: z.ZodDefault<z.ZodArray<any>>;
}, z.z.core.$strip>;
export type Navbar = z.infer<typeof navBarSchema>;
export type NavbarLink = z.infer<typeof nvabarLinkSchema>;
//# sourceMappingURL=navbar.d.ts.map