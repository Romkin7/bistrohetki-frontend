import z from 'zod';
export declare const globalSchema: z.ZodObject<{
    id: z.ZodNumber;
    siteName: z.ZodString;
    siteDescription: z.ZodString;
    keywords: z.ZodOptional<z.ZodArray<z.ZodString>>;
    canonicalUrl: z.ZodOptional<z.ZodString>;
    robots: z.ZodOptional<z.ZodString>;
    locale: any;
    defaultSeo: any;
    navbar: any;
    footer: z.ZodObject<{
        siteTitle: z.ZodString;
        sections: z.ZodArray<z.ZodObject<{
            id: z.ZodNumber;
            sectionTitle: z.ZodString;
            contactInfos: z.ZodArray<any>;
            socialLinks: z.ZodArray<any>;
        }, z.z.core.$strip>>;
        madeBy: z.ZodObject<{
            startText: z.ZodString;
            link: z.ZodObject<{
                href: z.ZodString;
                text: z.ZodString;
            }, z.z.core.$strip>;
            endText: z.ZodString;
        }, z.z.core.$strip>;
    }, z.z.core.$strip>;
}, z.z.core.$strip>;
export type Global = z.infer<typeof globalSchema>;
//# sourceMappingURL=global.d.ts.map