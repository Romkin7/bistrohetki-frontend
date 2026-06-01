import { z } from 'zod';
export declare const galleryPageDataSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    createdAt: z.ZodISODateTime;
    updatedAt: z.ZodISODateTime;
    publishedAt: z.ZodISODateTime;
    locale: any;
    mainTitle: z.ZodString;
    images: z.ZodArray<any>;
}, z.core.$strip>;
export type GalleryPageData = z.infer<typeof galleryPageDataSchema>;
//# sourceMappingURL=galleryPageData.d.ts.map