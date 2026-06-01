import { z } from 'zod';
declare const iconNameSchema: z.ZodEnum<{
    es: "es";
    fi: "fi";
    en: "en";
}>;
export declare const slimLanguageSelectModelSchema: z.ZodObject<{
    id: z.ZodNumber;
    href: z.ZodString;
    flagIcon: z.ZodEnum<{
        es: "es";
        fi: "fi";
        en: "en";
    }>;
    locale: any;
}, z.core.$strip>;
export declare const languageSelectModelSchema: z.ZodObject<{
    textContent: z.ZodString;
    documentId: z.ZodString;
    createdAt: z.ZodDate;
    updatedAt: z.ZodDate;
    publishedAt: z.ZodDate;
    id: z.ZodNumber;
    href: z.ZodString;
    flagIcon: z.ZodEnum<{
        es: "es";
        fi: "fi";
        en: "en";
    }>;
    locale: any;
}, z.core.$strip>;
export type LanguageSelectModel = z.infer<typeof languageSelectModelSchema>;
export type IconName = z.infer<typeof iconNameSchema>;
export type SlimLanguageSelectModel = z.infer<typeof slimLanguageSelectModelSchema>;
export {};
//# sourceMappingURL=languageSelect.d.ts.map