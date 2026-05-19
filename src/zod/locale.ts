import z from "zod";

// Define the supported locales as a const array first
export const SUPPORTED_LOCALES = [
  "fi",
  "fi-FI",
  "en",
  "en-US",
  "en-GB",
  "es",
  "es-ES",
] as const;

export const supportedLocales = z.enum(SUPPORTED_LOCALES).default("fi-FI");

export type SupportedLocale = z.infer<typeof supportedLocales>;
export const SupportedLocalesArray = supportedLocales.array();

export const localeSchema = z.enum(["fi-FI", "en", "es-ES"]).default("fi-FI");

export type Locale = z.infer<typeof localeSchema>;
export const LocaleMap = {
  // Use zod's parse to ensure valid locales
  en: localeSchema.parse("en"),
  "en-US": localeSchema.parse("en"),
  "en-GB": localeSchema.parse("en"),
  fi: localeSchema.parse("fi-FI"),
  "fi-FI": localeSchema.parse("fi-FI"),
  es: localeSchema.parse("es-ES"),
  "es-ES": localeSchema.parse("es-ES"),
};

export type LocaleMapType = Record<SupportedLocale, Locale>;
