import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Global } from "@/zod/global";

function setInitialState(): Global | null {
  return null;
}

const globalSlice = createSlice({
  name: "global",
  initialState: setInitialState(),
  reducers: {
    setGlobal: (state, action: PayloadAction<Global>) => {
      return { ...state, ...action.payload };
    },
    resetGlobal: () => {
      return setInitialState();
    },
  },
});

export const { setGlobal, resetGlobal } = globalSlice.actions;
export default globalSlice.reducer;
