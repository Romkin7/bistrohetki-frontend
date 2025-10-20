import { z } from "zod";
import { localeSchema } from "../locale";

export const homePageDataSchema = z.object({
  id: z.number().int().positive(),
  documentId: z.string(), // Changed from literal to string for flexibility
  createdAt: z.iso.datetime(), // ISO datetime string
  updatedAt: z.iso.datetime(), // ISO datetime string
  publishedAt: z.iso.datetime(), // ISO datetime string
  locale: localeSchema,
  mainTitle: z.string(),
  content: z.string(),
});

// Infer the TypeScript type from the Zod schema
export type HomePageData = z.infer<typeof homePageDataSchema>;
