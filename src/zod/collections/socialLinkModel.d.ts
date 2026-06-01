import { z } from 'zod';
export declare const socialLinkModelSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    textContent: z.ZodString;
    href: z.ZodString;
    icon: z.ZodEnum<{
        facebook: "facebook";
        instagram: "instagram";
        tiktok: "tiktok";
    }>;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    publishedAt: z.ZodDate;
    locale: any;
    linkText: z.ZodEnum<{
        "Tel:": "Tel:";
        "Email:": "Email:";
        Address: "Address";
    }>;
}, z.core.$strip>;
export type SocialLinkModel = z.infer<typeof socialLinkModelSchema>;
//# sourceMappingURL=socialLinkModel.d.ts.map