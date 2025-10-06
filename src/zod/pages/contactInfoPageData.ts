import { z } from "zod";
import { localeSchema } from "../locale";
import { contactInfoModelSchema } from "../collections/contactInfoModel";
import { seoSchema } from "../global/seoModel";

export const contactInfoPageDataSchema = z.object({
  id: z.number().int().positive(),
  documentId: z.string(), // Changed from literal to string for flexibility
  createdAt: z.string().datetime(), // ISO datetime string
  updatedAt: z.string().datetime(), // ISO datetime string
  publishedAt: z.string().datetime(), // ISO datetime string
  locale: localeSchema,
  mainTitle: z.string(),
  contact_infos: z.array(contactInfoModelSchema),
  defaultSeo: seoSchema,
});

// Infer the TypeScript type from the Zod schema
export type ContactInfoPageData = z.infer<typeof contactInfoPageDataSchema>;
