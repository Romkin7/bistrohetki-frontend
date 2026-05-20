import { z } from 'zod';
import { contactInfoModelSchema } from '../collections/contactInfoModel';
import { localeSchema } from '../locale';

export const contactInfoPageDataSchema = z.object({
    id: z.number().int().positive(),
    documentId: z.string(), // Changed from literal to string for flexibility
    createdAt: z.iso.datetime(), // ISO datetime string
    updatedAt: z.iso.datetime(), // ISO datetime string
    publishedAt: z.iso.datetime(), // ISO datetime string
    locale: localeSchema,
    mainTitle: z.string(),
    contact_infos: z.array(contactInfoModelSchema),
    social_links: z.array(contactInfoModelSchema),
    content: z.string().nullable(),
});

// Infer the TypeScript type from the Zod schema
export type ContactInfoPageData = z.infer<typeof contactInfoPageDataSchema>;
