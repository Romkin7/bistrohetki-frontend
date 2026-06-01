import { z } from 'zod';
export declare const partnerModelSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    textContent: z.ZodString;
    href: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    publishedAt: z.ZodDate;
    locale: any;
    name: z.ZodString;
    logo: any;
}, z.core.$strip>;
export type PartnerModel = z.infer<typeof partnerModelSchema>;
//# sourceMappingURL=partnerModel.d.ts.map