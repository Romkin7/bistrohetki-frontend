import i18next from 'i18next';
import { useLocale } from './useLocale';

export function useTranslator() {
    const { appLocale } = useLocale();
    return (
        namespace: string,
        key: string,
        params: Record<string, string | number>,
    ) => {
        return i18next.t(`${namespace}:${key}`, { lng: appLocale, ...params });
    };
}
