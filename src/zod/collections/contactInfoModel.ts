import { z } from 'zod';
import { localeSchema } from '../locale';

const iconNameSchema = z.enum(['phone', 'mail', 'location']);
const linkTextSchema = z.enum(['Tel:', 'Email:', 'Address']);

export const contactInfoModelSchema = z.object({
    id: z.number().int().positive(),
    documentId: z.string(),
    textContent: z.string(),
    href: z.string(),
    icon: iconNameSchema,
    createdAt: z.date(),
    updatedAt: z.date(),
    publishedAt: z.date(),
    locale: localeSchema,
    linkText: linkTextSchema,
});

// Infer the TypeScript types from the Zod schema
export type ContactInfoModel = z.infer<typeof contactInfoModelSchema>;
export type IconName = z.infer<typeof iconNameSchema>;
export type LinkText = z.infer<typeof linkTextSchema>;
