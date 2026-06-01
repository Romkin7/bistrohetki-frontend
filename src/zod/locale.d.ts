import z from 'zod';
export declare const SUPPORTED_LOCALES: readonly ["fi", "fi-FI", "en", "en-US", "en-GB", "es", "es-ES"];
export declare const supportedLocales: z.ZodDefault<z.ZodEnum<{
    es: "es";
    fi: "fi";
    en: "en";
    "fi-FI": "fi-FI";
    "es-ES": "es-ES";
    "en-US": "en-US";
    "en-GB": "en-GB";
}>>;
export type SupportedLocale = z.infer<typeof supportedLocales>;
export declare const SupportedLocalesArray: z.ZodArray<z.ZodDefault<z.ZodEnum<{
    es: "es";
    fi: "fi";
    en: "en";
    "fi-FI": "fi-FI";
    "es-ES": "es-ES";
    "en-US": "en-US";
    "en-GB": "en-GB";
}>>>;
export declare const localeSchema: z.ZodDefault<z.ZodEnum<{
    es: "es";
    fi: "fi";
    en: "en";
    "fi-FI": "fi-FI";
    "es-ES": "es-ES";
}>>;
export type Locale = z.infer<typeof localeSchema>;
export declare const LocaleMap: {
    en: "es" | "fi" | "en" | "fi-FI" | "es-ES";
    'en-US': "es" | "fi" | "en" | "fi-FI" | "es-ES";
    'en-GB': "es" | "fi" | "en" | "fi-FI" | "es-ES";
    fi: "es" | "fi" | "en" | "fi-FI" | "es-ES";
    'fi-FI': "es" | "fi" | "en" | "fi-FI" | "es-ES";
    es: "es" | "fi" | "en" | "fi-FI" | "es-ES";
    'es-ES': "es" | "fi" | "en" | "fi-FI" | "es-ES";
};
export type LocaleMapType = Record<SupportedLocale, Locale>;
//# sourceMappingURL=locale.d.ts.map