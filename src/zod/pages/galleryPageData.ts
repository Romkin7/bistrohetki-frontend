import { z } from "zod";
import { localeSchema } from "../locale";
import { mediaSchema } from "../media";

export const galleryPageDataSchema = z.object({
  id: z.number().int().positive(),
  documentId: z.string(), // Changed from literal to string for flexibility
  createdAt: z.string().datetime(), // ISO datetime string
  updatedAt: z.string().datetime(), // ISO datetime string
  publishedAt: z.string().datetime(), // ISO datetime string
  locale: localeSchema,
  mainTitle: z.string(),
  images: z.array(mediaSchema),
});

// Infer the TypeScript type from the Zod schema
export type GalleryPageData = z.infer<typeof galleryPageDataSchema>;
