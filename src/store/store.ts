// Create a Redux store holding the state of your app.
import { configureStore } from "@reduxjs/toolkit";
import globalSlice from "./slices/globalSlice";
import messageSlice from "./slices/messageSlice";

export type RootState = ReturnType<typeof store.getState>;

// Its API is { subscribe, dispatch, getState }.
const store = configureStore({
  reducer: {
    message: messageSlice,
    global: globalSlice, // Assuming globalSlice is imported from the appropriate file
  },
});

export default store;
