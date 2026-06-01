import i18next from 'i18next';
import { useLocale } from './useLocale';
export function useTranslator() {
    const { appLocale } = useLocale();
    return (namespace, key, params) => {
        return i18next.t(`${namespace}:${key}`, { lng: appLocale, ...params });
    };
}
//# sourceMappingURL=useTranslator.js.map