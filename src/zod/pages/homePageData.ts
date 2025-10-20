import { z } from "zod";
import { partnerModelSchema } from "../collections/partnerModel";
import { localeSchema } from "../locale";
import { mediaSchema } from "../media";

export const homePageDataSchema = z.object({
  id: z.number().int().positive(),
  documentId: z.string(), // Changed from literal to string for flexibility
  createdAt: z.iso.datetime(), // ISO datetime string
  updatedAt: z.iso.datetime(), // ISO datetime string
  publishedAt: z.iso.datetime(), // ISO datetime string
  locale: localeSchema,
  mainTitle: z.string(),
  content: z.string(),
  partnersTitle: z.string(),
  partners: z.array(partnerModelSchema),
  centerColumnTitle: z.string().optional(),
  leftColumnTitle: z.string().optional(),
  centerColumnImages: z.array(mediaSchema),
  leftColumnImages: z.array(mediaSchema),
});

// Infer the TypeScript type from the Zod schema
export type HomePageData = z.infer<typeof homePageDataSchema>;
