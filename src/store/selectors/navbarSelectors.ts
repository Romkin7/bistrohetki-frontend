import { createSelector } from "@reduxjs/toolkit";
import type { RootState } from "../store";

// Base selectors
const selectGlobal = (state: RootState) => state.global;
const selectSelectedLanguage = (state: RootState) => state.selectedLanguage;

// Memoized selectors for Navbar
export const selectNavbar = createSelector(
  [selectGlobal],
  (global) => global?.navbar
);

export const selectBrandImage = createSelector(
  [selectNavbar],
  (navbar) => navbar?.brandImage
);

export const selectNavbarLinks = createSelector(
  [selectNavbar],
  (navbar) => navbar?.navbarLinks || []
);

export const selectSocialLinks = createSelector(
  [selectNavbar],
  (navbar) => navbar?.socialLinks || []
);

// Memoized selector for language
export const selectCurrentLanguage = createSelector(
  [selectSelectedLanguage],
  (selectedLanguage) => selectedLanguage
);

// Combined selectors for complex data
export const selectNavbarData = createSelector(
  [selectBrandImage, selectNavbarLinks, selectSocialLinks],
  (brandImage, navbarLinks, socialLinks) => ({
    brandImage,
    navbarLinks,
    socialLinks,
  })
);
