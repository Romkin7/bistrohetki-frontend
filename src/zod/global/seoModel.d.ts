import { z } from 'zod';
export declare const seoSchema: z.ZodObject<{
    id: z.ZodNumber;
    metaTitle: z.ZodString;
    metaDescription: z.ZodString;
    keywords: z.ZodString;
    canonicalUrl: z.ZodString;
    robots: z.ZodString;
    favicons: z.ZodArray<any>;
}, z.core.$strip>;
export type Seo = z.infer<typeof seoSchema>;
//# sourceMappingURL=seoModel.d.ts.map