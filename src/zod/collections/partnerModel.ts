import { z } from 'zod';
import { localeSchema } from '../locale';
import { mediaSchema } from '../media';

export const partnerModelSchema = z.object({
    id: z.number().int().positive(),
    documentId: z.string(),
    textContent: z.string(),
    href: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    publishedAt: z.date(),
    locale: localeSchema,
    name: z.string(),
    logo: mediaSchema,
});

// Infer the TypeScript types from the Zod schema
export type PartnerModel = z.infer<typeof partnerModelSchema>;
