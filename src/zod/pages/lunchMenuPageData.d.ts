import { z } from 'zod';
export declare const lunchMenuPageDataSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    createdAt: z.ZodISODateTime;
    updatedAt: z.ZodISODateTime;
    publishedAt: z.ZodISODateTime;
    locale: any;
    mainTitle: z.ZodString;
    menu: any;
    subTitle: z.ZodString;
}, z.core.$strip>;
export type LunchMenuPageData = z.infer<typeof lunchMenuPageDataSchema>;
//# sourceMappingURL=lunchMenuPageData.d.ts.map