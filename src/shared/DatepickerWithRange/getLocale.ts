import type { Locale as LocaleDF } from 'date-fns';
import { fi, es, enUS } from 'date-fns/locale';
import type { Locale } from '@/zod/locale';

/**
 * getLocale function
 * @param {Locale} locale
 * @returns {LocaleDF}
 */
function getLocale(locale: Locale): LocaleDF {
    return locale === 'es-ES' ? es : locale === 'en' ? enUS : fi;
}

export default getLocale;
