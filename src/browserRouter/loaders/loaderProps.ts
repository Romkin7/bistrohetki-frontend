import z from 'zod';
import { supportedLocales } from '@/zod/locale';

export const loaderPropsSchema = z.object({
    locale: supportedLocales,
});

export type LoaderProps = z.infer<typeof loaderPropsSchema>;
