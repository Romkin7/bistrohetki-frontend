import { useParams } from "react-router";
import { LocaleMap, type Locale } from "@/zod/locale";

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
    urlLocale, // 'en', 'sv', 'es', 'fi' - for URL building
    appLocale, // 'en-US', 'sv-SE', 'es-ES', 'fi-FI' - for your app
    isDefault: !params.locale, // true if using default (no locale in URL)
  };
};

/**
 * Hook to build localized URLs
 */
export const useLocalizedUrl = () => {
  const { urlLocale } = useLocale();

  const buildUrl = (path: string, locale?: string): string => {
    const targetLocale = locale || urlLocale;

    // Don't add locale prefix for default Finnish
    if (targetLocale === "fi" || !targetLocale) {
      return path.startsWith("/") ? path : `/${path}`;
    }

    // Add locale prefix for other languages
    const cleanPath = path.startsWith("/") ? path.slice(1) : path;
    return `/${targetLocale}${cleanPath ? `/${cleanPath}` : ""}`;
  };

  return { buildUrl, currentLocale: urlLocale };
};
