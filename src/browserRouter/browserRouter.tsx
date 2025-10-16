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

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      // Internationalized routes with locale parameter (:locale/page)
      {
        path: ":locale",
        loader: ({ params }) => {
          // Validate locale parameter
          const validLocales = ["en", "sv", "es"];
          if (!validLocales.includes(params.locale || "")) {
            throw new Response("Invalid locale", { status: 404 });
          }
          return { locale: params.locale };
        },
        children: [
          {
            index: true,
            loader: ({ params }) =>
              homePageLoader({
                locale:
                  params.locale === "en"
                    ? "en"
                    : params.locale === "sv"
                      ? "sv-SE"
                      : params.locale === "es"
                        ? "es-ES"
                        : "fi-FI",
              }),
            element: <HomePage />,
          },
          {
            path: "gallery",
            loader: ({ params }) =>
              galleryPageLoader({
                locale:
                  params.locale === "en"
                    ? "en"
                    : params.locale === "sv"
                      ? "sv-SE"
                      : params.locale === "es"
                        ? "es-ES"
                        : "fi-FI",
              }),
            element: <GalleryPage />,
          },
          {
            path: "menu",
            loader: ({ params }) =>
              menuPageLoader({
                locale:
                  params.locale === "en"
                    ? "en"
                    : params.locale === "sv"
                      ? "sv-SE"
                      : params.locale === "es"
                        ? "es-ES"
                        : "fi-FI",
              }),
            element: <MenuPage />,
          },
          {
            path: "contact",
            loader: ({ params }) =>
              contactInfoPageLoader({
                locale:
                  params.locale === "en"
                    ? "en"
                    : params.locale === "sv"
                      ? "sv-SE"
                      : params.locale === "es"
                        ? "es-ES"
                        : "fi-FI",
              }),
            element: <ContactInfoPage />,
          },
        ],
      },
    ],
  },
]);

export default router;
