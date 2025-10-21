import { lazy } from "react";

export const HomePage = lazy(() => import("../../pages/HomePage"));
export const MenuPage = lazy(() => import("../../pages/MenuPage"));
export const LunchMenuPage = lazy(() => import("../../pages/LunchMenuPage"));
export const GalleryPage = lazy(() => import("../../pages/GalleryPage"));
export const ContactInfoPage = lazy(
  () => import("../../pages/ContactInfoPage")
);

// You can add more lazy-loaded components here as needed
export const Map = lazy(() => import("../../shared/Map/Map"));
export const MobileNavbarMenu = lazy(
  () => import("../../shared/Navbar/MobileNavbarMenu/MobileNavbarMenu")
);
