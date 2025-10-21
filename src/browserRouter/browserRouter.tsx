import { Suspense } from "react";
import { createBrowserRouter } from "react-router";
import contactInfoPageLoader from "./loaders/contactInfoPageLoader";
import galleryPageLoader from "./loaders/galleryPageLoader";
import homePageLoader from "./loaders/homePageLoader";
import lunchMenuPageLoader from "./loaders/lunchMenuPageLoader";
import menuPageLoader from "./loaders/menuPageLoader";
import PrimaryLayout from "@/Layouts/PrimaryLayout";
import {
  HomePage,
  MenuPage,
  LunchMenuPage,
  GalleryPage,
  ContactInfoPage,
} from "@/browserRouter/lazyloadedComponents/LazyLoadedPages";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/zod/locale";

// Loading fallback component
const PageLoader = () => (
  <div
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      height: "200px",
      fontSize: "16px",
      color: "#666",
    }}
  >
    Loading...
  </div>
);

// Wrapper component with Suspense
const SuspenseWrapper = ({ children }: { children: React.ReactNode }) => (
  <Suspense fallback={<PageLoader />}>{children}</Suspense>
);

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
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
              <SuspenseWrapper>
                <HomePage />
              </SuspenseWrapper>
            ),
          },
          {
            path: "gallery",
            loader: ({ params }) =>
              galleryPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: (
              <SuspenseWrapper>
                <GalleryPage />
              </SuspenseWrapper>
            ),
          },
          {
            path: "lunch-menu",
            loader: ({ params }) =>
              lunchMenuPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: (
              <SuspenseWrapper>
                <LunchMenuPage />
              </SuspenseWrapper>
            ),
          },
          {
            path: "menu",
            loader: ({ params }) =>
              menuPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: (
              <SuspenseWrapper>
                <MenuPage />
              </SuspenseWrapper>
            ),
          },
          {
            path: "contact",
            loader: ({ params }) =>
              contactInfoPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: (
              <SuspenseWrapper>
                <ContactInfoPage />
              </SuspenseWrapper>
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
          <SuspenseWrapper>
            <HomePage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "gallery",
        loader: () =>
          galleryPageLoader({
            locale: "fi-FI",
          }),
        element: (
          <SuspenseWrapper>
            <GalleryPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "lunch-menu",
        loader: () =>
          lunchMenuPageLoader({
            locale: "fi-FI",
          }),
        element: (
          <SuspenseWrapper>
            <LunchMenuPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "menu",
        loader: () =>
          menuPageLoader({
            locale: "fi-FI",
          }),
        element: (
          <SuspenseWrapper>
            <MenuPage />
          </SuspenseWrapper>
        ),
      },
      {
        path: "contact",
        loader: () =>
          contactInfoPageLoader({
            locale: "fi-FI",
          }),
        element: (
          <SuspenseWrapper>
            <ContactInfoPage />
          </SuspenseWrapper>
        ),
      },
    ],
  },
]);

export default router;
