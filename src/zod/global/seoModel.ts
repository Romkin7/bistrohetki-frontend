import { z } from 'zod';
import { mediaSchema } from '../media';

export const seoSchema = z.object({
    id: z.number().int().positive(),
    metaTitle: z.string(),
    metaDescription: z.string(),
    keywords: z.string(),
    canonicalUrl: z.string(),
    robots: z.string(),
    favicons: z.array(mediaSchema),
});

// Infer the TypeScript type from the Zod schema
export type Seo = z.infer<typeof seoSchema>;
