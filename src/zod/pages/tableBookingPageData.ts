import { z } from "zod";
import { mediaSchema } from "../media";

export const tableBookingPageDataSchema = z.object({
  id: z.number().int().positive(),
  documentId: z.string(), // Changed from literal to string for flexibility
  createdAt: z.iso.datetime(), // ISO datetime string
  updatedAt: z.iso.datetime(), // ISO datetime string
  publishedAt: z.iso.datetime(), // ISO datetime string
  mainTitle: z.string(),
  numberOfGuestsTitle: z.string(),
  image: mediaSchema,
});

// Infer the TypeScript type from the Zod schema
export type TableBookingPageData = z.infer<typeof tableBookingPageDataSchema>;
