/**
 * Hook to detect the current locale from the URL
 * Returns the locale from route params or defaults to 'fi-FI'
 */
export declare const useLocale: () => {
    appLocale: any;
    isDefault: boolean;
};
/**
 * Hook to build localized URLs
 */
export declare const useLocalizedUrl: () => {
    buildUrl: (path: string, locale?: string) => string;
    currentLocale: any;
};
//# sourceMappingURL=useLocale.d.ts.map