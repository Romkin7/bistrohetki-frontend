import { fi, es, enUS } from "date-fns/locale";
/**
 * getLocale function
 * @param {Locale} locale
 * @returns {LocaleDF}
 */
function getLocale(locale) {
    return locale === "es-ES" ? es : locale === "en" ? enUS : fi;
}
export default getLocale;
//# sourceMappingURL=getLocale.js.map