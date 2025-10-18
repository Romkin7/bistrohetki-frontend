import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { LocaleState } from "@/zod/locale";

function setInitialState(): LocaleState | null {
  return { locale: "fi-FI" };
}

const localeSlice = createSlice({
  name: "localeState",
  initialState: setInitialState(),
  reducers: {
    setLocale: (state, action: PayloadAction<LocaleState>) => {
      return { ...state, ...action.payload };
    },
    resetLocale: () => {
      return setInitialState();
    },
  },
});

export const { setLocale, resetLocale } = localeSlice.actions;
export default localeSlice.reducer;
