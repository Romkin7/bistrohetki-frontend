import { createBrowserRouter } from "react-router";
import ContactInfoPage from "@/pages/ContactInfoPage";
import GalleryPage from "@/pages/GalleryPage";
import HomePage from "@/pages/HomePage";
import MenuPage from "@/pages/MenuPage";
import contactInfoPageLoader from "./loaders/contactInfoPageLoader";
import PrimaryLayout from "@/Layouts/PrimaryLayout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrimaryLayout />,
    children: [
      { index: true, element: <HomePage /> }, // index: true means this is the default child route for "/"
      { path: "gallery", element: <GalleryPage /> },
      { path: "menu", element: <MenuPage /> },
      {
        path: "contact",
        loader: () => contactInfoPageLoader(),
        element: <ContactInfoPage />,
      },
    ],
  },
]);

export default router;
