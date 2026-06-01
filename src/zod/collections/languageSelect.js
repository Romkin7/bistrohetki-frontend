import { z } from 'zod';
import { localeSchema } from '../locale';
const iconNameSchema = z.enum(['fi', 'en', 'es']);
export const slimLanguageSelectModelSchema = z.object({
    id: z.number().int().positive(),
    href: z.string(),
    flagIcon: iconNameSchema,
    locale: localeSchema,
});
export const languageSelectModelSchema = z
    .object({
    textContent: z.string(),
    documentId: z.string(),
    createdAt: z.date(),
    updatedAt: z.date(),
    publishedAt: z.date(),
})
    .extend(slimLanguageSelectModelSchema.shape);
//# sourceMappingURL=languageSelect.js.map