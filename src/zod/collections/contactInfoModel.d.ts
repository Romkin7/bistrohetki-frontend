import { z } from 'zod';
declare const iconNameSchema: z.ZodEnum<{
    mail: "mail";
    phone: "phone";
    location: "location";
}>;
declare const linkTextSchema: z.ZodEnum<{
    "Tel:": "Tel:";
    "Email:": "Email:";
    Address: "Address";
}>;
export declare const contactInfoModelSchema: z.ZodObject<{
    id: z.ZodNumber;
    documentId: z.ZodString;
    textContent: z.ZodString;
    href: z.ZodString;
    icon: z.ZodEnum<{
        mail: "mail";
        phone: "phone";
        location: "location";
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
export type ContactInfoModel = z.infer<typeof contactInfoModelSchema>;
export type IconName = z.infer<typeof iconNameSchema>;
export type LinkText = z.infer<typeof linkTextSchema>;
export {};
//# sourceMappingURL=contactInfoModel.d.ts.map