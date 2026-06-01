import { z } from 'zod';
export declare const menuPageDataSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    createdAt: z.ZodISODateTime;
    updatedAt: z.ZodISODateTime;
    publishedAt: z.ZodISODateTime;
    locale: any;
    mainTitle: z.ZodString;
    menus: z.ZodArray<any>;
    subTitle: z.ZodString;
}, z.core.$strip>;
export type MenuPageData = z.infer<typeof menuPageDataSchema>;
//# sourceMappingURL=menuPageData.d.ts.map