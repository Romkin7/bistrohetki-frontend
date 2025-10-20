import { z } from "zod";
import { localeSchema } from "../locale";
import { mediaSchema } from "../media";

export const lunchMenuPageDataSchema = z.object({
  id: z.number().int().positive(),
  documentId: z.string(), // Changed from literal to string for flexibility
  createdAt: z.iso.datetime(), // ISO datetime string
  updatedAt: z.iso.datetime(), // ISO datetime string
  publishedAt: z.iso.datetime(), // ISO datetime string
  locale: localeSchema,
  mainTitle: z.string(),
  menu: mediaSchema,
  subTitle: z.string(),
});

// Infer the TypeScript type from the Zod schema
export type LunchMenuPageData = z.infer<typeof lunchMenuPageDataSchema>;
