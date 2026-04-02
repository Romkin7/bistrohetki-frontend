import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import contactInfoPageLoader from "./loaders/contactInfoPageLoader";
import galleryPageLoader from "./loaders/galleryPageLoader";
import homePageLoader from "./loaders/homePageLoader";
import lunchMenuPageLoader from "./loaders/lunchMenuPageLoader";
import menuPageLoader from "./loaders/menuPageLoader";
import tableBookingPageLoader from "./loaders/tableBookingPageLoader";
import { PrimaryLayout } from "@/Layouts";
import {
  ContactInfoPage,
  GalleryPage,
  HomePage,
  LunchMenuPage,
  MenuPage,
  TableBookingPage,
} from "@/pages";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/zod/locale";

const router = createBrowserRouter([
  {
    path: "/",
    hydrateFallbackElement: <div>Loading...</div>,
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <PrimaryLayout />
      </Suspense>
    ),
    children: [
      // Internationalized routes with locale parameter (:locale/page)
      {
        path: ":locale",
        loader: ({ params }) => {
          // Validate locale parameter using the enum values
          const validLocales = SUPPORTED_LOCALES; // Use the plain array for includes check
          if (!validLocales.includes(params.locale as SupportedLocale)) {
            return { locale: "fi-FI" }; // Default locale
          }
          return { locale: params.locale as SupportedLocale };
        },
        children: [
          {
            index: true,
            loader: ({ params }) =>
              homePageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <HomePage />
              </Suspense>
            ),
          },
          {
            path: "gallery",
            loader: ({ params }) =>
              galleryPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <GalleryPage />
              </Suspense>
            ),
          },
          {
            path: "lunch-menu",
            loader: ({ params }) =>
              lunchMenuPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <LunchMenuPage />
              </Suspense>
            ),
          },
          {
            path: "menu",
            loader: ({ params }) =>
              menuPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <MenuPage />
              </Suspense>
            ),
          },
          {
            path: "table-booking",
            loader: ({ params }) =>
              tableBookingPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <TableBookingPage />
              </Suspense>
            ),
          },
          {
            path: "contact",
            loader: ({ params }) =>
              contactInfoPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: (
              <Suspense fallback={<div>Loading...</div>}>
                <ContactInfoPage />
              </Suspense>
            ),
          },
        ],
      },
      // Default routes without locale parameter (assumed 'fi-FI')
      {
        index: true,
        loader: () =>
          homePageLoader({
            locale: "fi-FI",
          }),
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "gallery",
        loader: () =>
          galleryPageLoader({
            locale: "fi-FI",
          }),
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <GalleryPage />
          </Suspense>
        ),
      },
      {
        path: "lunch-menu",
        loader: () =>
          lunchMenuPageLoader({
            locale: "fi-FI",
          }),
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <LunchMenuPage />
          </Suspense>
        ),
      },
      {
        path: "menu",
        loader: () =>
          menuPageLoader({
            locale: "fi-FI",
          }),
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MenuPage />
          </Suspense>
        ),
      },
      {
        path: "contact",
        loader: () =>
          contactInfoPageLoader({
            locale: "fi-FI",
          }),
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <ContactInfoPage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
