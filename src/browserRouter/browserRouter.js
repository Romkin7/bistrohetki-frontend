import { jsx as _jsx } from "react/jsx-runtime";
import { Suspense } from 'react';
import { createBrowserRouter } from 'react-router';
import contactInfoPageLoader from './loaders/contactInfoPageLoader';
import galleryPageLoader from './loaders/galleryPageLoader';
import homePageLoader from './loaders/homePageLoader';
import lunchMenuPageLoader from './loaders/lunchMenuPageLoader';
import menuPageLoader from './loaders/menuPageLoader';
import tableBookingPageLoader from './loaders/tableBookingPageLoader';
import { PrimaryLayout } from '@/Layouts';
import { ContactInfoPage, GalleryPage, HomePage, LunchMenuPage, MenuPage, TableBookingPage, } from '@/pages';
import { SUPPORTED_LOCALES } from '@/zod/locale';
const router = createBrowserRouter([
    {
        path: '/',
        hydrateFallbackElement: _jsx("div", { children: "Loading..." }),
        element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(PrimaryLayout, {}) })),
        children: [
            // Internationalized routes with locale parameter (:locale/page)
            {
                path: ':locale',
                loader: ({ params }) => {
                    // Validate locale parameter using the enum values
                    const validLocales = SUPPORTED_LOCALES; // Use the plain array for includes check
                    if (!validLocales.includes(params.locale)) {
                        return { locale: 'fi-FI' }; // Default locale
                    }
                    return { locale: params.locale };
                },
                children: [
                    {
                        index: true,
                        loader: ({ params }) => homePageLoader({
                            locale: params.locale,
                        }),
                        element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(HomePage, {}) })),
                    },
                    {
                        path: 'gallery',
                        loader: ({ params }) => galleryPageLoader({
                            locale: params.locale,
                        }),
                        element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(GalleryPage, {}) })),
                    },
                    {
                        path: 'lunch-menu',
                        loader: ({ params }) => lunchMenuPageLoader({
                            locale: params.locale,
                        }),
                        element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(LunchMenuPage, {}) })),
                    },
                    {
                        path: 'menu',
                        loader: ({ params }) => menuPageLoader({
                            locale: params.locale,
                        }),
                        element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(MenuPage, {}) })),
                    },
                    {
                        path: 'table-booking',
                        loader: ({ params }) => tableBookingPageLoader({
                            locale: params.locale,
                        }),
                        element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(TableBookingPage, {}) })),
                    },
                    {
                        path: 'contact',
                        loader: ({ params }) => contactInfoPageLoader({
                            locale: params.locale,
                        }),
                        element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(ContactInfoPage, {}) })),
                    },
                ],
            },
            // Default routes without locale parameter (assumed 'fi-FI')
            {
                index: true,
                loader: () => homePageLoader({
                    locale: 'fi-FI',
                }),
                element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(HomePage, {}) })),
            },
            {
                path: 'gallery',
                loader: () => galleryPageLoader({
                    locale: 'fi-FI',
                }),
                element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(GalleryPage, {}) })),
            },
            {
                path: 'lunch-menu',
                loader: () => lunchMenuPageLoader({
                    locale: 'fi-FI',
                }),
                element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(LunchMenuPage, {}) })),
            },
            {
                path: 'menu',
                loader: () => menuPageLoader({
                    locale: 'fi-FI',
                }),
                element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(MenuPage, {}) })),
            },
            {
                path: 'table-booking',
                loader: () => tableBookingPageLoader({
                    locale: 'fi-FI',
                }),
                element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(TableBookingPage, {}) })),
            },
            {
                path: 'contact',
                loader: () => contactInfoPageLoader({
                    locale: 'fi-FI',
                }),
                element: (_jsx(Suspense, { fallback: _jsx("div", { children: "Loading..." }), children: _jsx(ContactInfoPage, {}) })),
            },
        ],
    },
]);
export default router;
//# sourceMappingURL=browserRouter.js.map