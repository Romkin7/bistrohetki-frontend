// Create a Redux store holding the state of your app.
import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slices/globalSlice";
import messageSlice from "./slices/messageSlice";
import selectedLanguageSlice from "./slices/selectedLanguage";

export type RootState = ReturnType<typeof store.getState>;

// Its API is { subscribe, dispatch, getState }.
const store = configureStore({
  reducer: {
    global: globalSlice, // Assuming globalSlice is imported from the appropriate file
    message: messageSlice,
    selectedLanguage: selectedLanguageSlice,
  },
});

export default store;
