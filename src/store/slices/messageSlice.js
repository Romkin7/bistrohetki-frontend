import { createSlice } from '@reduxjs/toolkit';
function setInitialState() {
    return null;
}
const messageSlice = createSlice({
    name: 'message',
    initialState: setInitialState(),
    reducers: {
        setMessage: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetMessage: () => {
            return setInitialState();
        },
    },
});
export const { setMessage, resetMessage } = messageSlice.actions;
export default messageSlice.reducer;
//# sourceMappingURL=messageSlice.js.map