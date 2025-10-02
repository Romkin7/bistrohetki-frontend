import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { Message } from "@/zod/message";

function setInitialState(): Message | null {
  return null;
}

const messageSlice = createSlice({
  name: "message",
  initialState: setInitialState(),
  reducers: {
    setMessage: (state, action: PayloadAction<Message>) => {
      return { ...state, ...action.payload };
    },
    resetMessage: () => {
      return setInitialState();
    },
  },
});

export const { setMessage, resetMessage } = messageSlice.actions;
export default messageSlice.reducer;
