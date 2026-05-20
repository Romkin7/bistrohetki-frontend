import z from 'zod';
import { languageSelectModelSchema } from '../collections/languageSelect';
import { socialLinkModelSchema } from '../collections/socialLinkModel';
import { mediaSchema } from '../media';

export const nvabarLinkSchema = z.object({
    id: z.number(),
    documentId: z.string().optional(),
    textContent: z.string(),
    href: z.string(),
    isExternal: z.boolean().default(false),
    createdAt: z.date().optional(),
    updatedAt: z.date().optional(),
    publishedAt: z.date().optional(),
    locale: z.enum(['fi-FI', 'sv-SE', 'en-EN', 'es-ES']).default('fi-FI'),
});

export const navBarSchema = z.object({
    brandImage: mediaSchema,
    title: z.string(),
    navbarLinks: z.array(nvabarLinkSchema).default([]),
    languageSelectLinks: z.array(languageSelectModelSchema).default([]),
    socialLinks: z.array(socialLinkModelSchema).default([]),
});

export type Navbar = z.infer<typeof navBarSchema>;
export type NavbarLink = z.infer<typeof nvabarLinkSchema>;
