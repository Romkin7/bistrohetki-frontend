import { useParams } from "react-router";
import {
  LocaleMap,
  // SUPPORTED_LOCALES,
  type Locale,
} from "@/zod/locale";

/**
 * Hook to detect the current locale from the URL
 * Returns the locale from route params or defaults to 'fi-FI'
 */
export const useLocale = () => {
  const params = useParams<{ locale?: string }>();

  // Map URL locales to your app's locale format
  const localeMap = LocaleMap;

  // Get locale from params or default to Finnish
  const urlLocale: Locale = (params.locale as Locale) || "fi-FI";
  const appLocale = localeMap[urlLocale] || "fi-FI";

  return {
    appLocale, // 'en-US', 'sv-SE', 'es-ES', 'fi-FI' - for your app
    isDefault: !params.locale, // true if using default (no locale in URL)
  };
};

/**
 * Hook to build localized URLs
 */
export const useLocalizedUrl = () => {
  const { appLocale } = useLocale();

  function cleanpath(path: string): string {
    return path.replace(/^\/(fi-FI|fi|en|en-GB|en-US|es|es-ES)(\/|$)/, "/");
  }

  const buildUrl = (path: string, locale?: string): string => {
    // const supportedLocales = SUPPORTED_LOCALES;
    const targetLocale = locale || appLocale;
    if (path.includes("fi-FI") || targetLocale === "fi-FI") {
      // Default locale, no prefix
      return `${cleanpath(path)}`;
    }

    // Add locale prefix for other languages
    // remove old locale from path if present
    const cleanedPath = cleanpath(path);
    return `/${targetLocale}${cleanedPath.startsWith("/") ? "" : "/"}${cleanedPath}`;
  };

  return { buildUrl, currentLocale: appLocale };
};
