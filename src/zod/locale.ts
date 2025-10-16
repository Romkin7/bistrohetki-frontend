import z from "zod";

export const localeSchema = z
  .enum(["fi-FI", "sv-SE", "en", "es-ES"])
  .default("fi-FI");

export type Locale = z.infer<typeof localeSchema>;
export const LocaleMap = {
  // Use zod's parse to ensure valid locales
  en: localeSchema.parse("en"),
  "sv-SE": localeSchema.parse("sv-SE"),
  "es-ES": localeSchema.parse("es-ES"),
  "fi-FI": localeSchema.parse("fi-FI"),
};
