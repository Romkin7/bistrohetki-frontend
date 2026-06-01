import { z } from 'zod';
export declare const homePageDataSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    createdAt: z.ZodISODateTime;
    updatedAt: z.ZodISODateTime;
    publishedAt: z.ZodISODateTime;
    locale: any;
    mainTitle: z.ZodString;
    content: z.ZodString;
    partnersTitle: z.ZodString;
    partners: z.ZodArray<any>;
    centerColumnTitle: z.ZodOptional<z.ZodString>;
    leftColumnTitle: z.ZodOptional<z.ZodString>;
    centerColumnImages: z.ZodArray<any>;
    leftColumnImages: z.ZodArray<any>;
}, z.core.$strip>;
export type HomePageData = z.infer<typeof homePageDataSchema>;
//# sourceMappingURL=homePageData.d.ts.map