import { createBrowserRouter } from "react-router";
import contactInfoPageLoader from "./loaders/contactInfoPageLoader";
import galleryPageLoader from "./loaders/galleryPageLoader";
import homePageLoader from "./loaders/homePageLoader";
import menuPageLoader from "./loaders/menuPageLoader";
import PrimaryLayout from "@/Layouts/PrimaryLayout";
import ContactInfoPage from "@/pages/ContactInfoPage";
import GalleryPage from "@/pages/GalleryPage";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";
import { SUPPORTED_LOCALES, type SupportedLocale } from "@/zod/locale";

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
            throw new Response("Invalid locale", { status: 404 });
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
            element: <HomePage />,
          },
          {
            path: "gallery",
            loader: ({ params }) =>
              galleryPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: <GalleryPage />,
          },
          {
            path: "menu",
            loader: ({ params }) =>
              menuPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: <MenuPage />,
          },
          {
            path: "contact",
            loader: ({ params }) =>
              contactInfoPageLoader({
                locale: params.locale as SupportedLocale,
              }),
            element: <ContactInfoPage />,
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
        element: <HomePage />,
      },
      {
        path: "gallery",
        loader: () =>
          galleryPageLoader({
            locale: "fi-FI",
          }),
        element: <GalleryPage />,
      },
      {
        path: "menu",
        loader: () =>
          menuPageLoader({
            locale: "fi-FI",
          }),
        element: <MenuPage />,
      },
      {
        path: "contact",
        loader: () =>
          contactInfoPageLoader({
            locale: "fi-FI",
          }),
        element: <ContactInfoPage />,
      },
    ],
  },
]);

export default router;
