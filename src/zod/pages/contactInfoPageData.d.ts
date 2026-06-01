import { z } from 'zod';
export declare const contactInfoPageDataSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    createdAt: z.ZodISODateTime;
    updatedAt: z.ZodISODateTime;
    publishedAt: z.ZodISODateTime;
    locale: any;
    mainTitle: z.ZodString;
    contact_infos: z.ZodArray<any>;
    social_links: z.ZodArray<any>;
    content: z.ZodNullable<z.ZodString>;
}, z.core.$strip>;
export type ContactInfoPageData = z.infer<typeof contactInfoPageDataSchema>;
//# sourceMappingURL=contactInfoPageData.d.ts.map