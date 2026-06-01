import z from 'zod';
import { supportedLocales } from '@/zod/locale';
export const loaderPropsSchema = z.object({
    locale: supportedLocales,
});
//# sourceMappingURL=loaderProps.js.map