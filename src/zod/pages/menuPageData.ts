import { z } from "zod";
import { localeSchema } from "../locale";
import { mediaSchema } from "../media";

export const menuPageDataSchema = z.object({
  id: z.number().int().positive(),
  documentId: z.string(), // Changed from literal to string for flexibility
  createdAt: z.string().datetime(), // ISO datetime string
  updatedAt: z.string().datetime(), // ISO datetime string
  publishedAt: z.string().datetime(), // ISO datetime string
  locale: localeSchema,
  mainTitle: z.string(),
  menus: z.array(mediaSchema),
  subTitle: z.string(),
});

// Infer the TypeScript type from the Zod schema
export type MenuPageData = z.infer<typeof menuPageDataSchema>;
