import { z } from "zod";
import { localeSchema } from "../locale";

const iconNameSchema = z.enum(["facebook", "instagram", "tiktok"]);
const linkTextSchema = z.enum(["Tel:", "Email:", "Address"]);

export const socialLinkModelSchema = z.object({
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
export type SocialLinkModel = z.infer<typeof socialLinkModelSchema>;
