import { z } from "zod";
import { localeSchema } from "../locale";

const iconNameSchema = z.enum(["fi", "en", "es"]);

export const slimLanguageSelectModelSchema = z.object({
  href: z.string(),
  flagIcon: iconNameSchema,
  locale: localeSchema,
});

export const languageSelectModelSchema = z
  .object({
    id: z.number().int().positive(),
    textContent: z.string(),
    documentId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    publishedAt: z.date(),
  })
  .extend(slimLanguageSelectModelSchema.shape);

// Infer the TypeScript types from the Zod schema
export type LanguageSelectModel = z.infer<typeof languageSelectModelSchema>;
export type IconName = z.infer<typeof iconNameSchema>;
export type SlimLanguageSelectModel = z.infer<
  typeof slimLanguageSelectModelSchema
>;
