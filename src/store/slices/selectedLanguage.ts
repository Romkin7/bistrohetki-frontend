import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { SlimLanguageSelectModel } from "@/zod/collections/languageSelect";

function setInitialState(): SlimLanguageSelectModel | null {
  return {
    id: 0,
    href: "fi-FI",
    flagIcon: "fi",
    locale: "fi-FI",
  };
}

const selectedLanguageSlice = createSlice({
  name: "selectedLanguage",
  initialState: setInitialState(),
  reducers: {
    setSelectedLanguage: (
      state,
      action: PayloadAction<SlimLanguageSelectModel>
    ) => {
      return { ...state, ...action.payload };
    },
    resetSelectedLanguage: () => {
      return setInitialState();
    },
  },
});

export const { setSelectedLanguage, resetSelectedLanguage } =
  selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
