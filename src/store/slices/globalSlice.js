import { createSlice } from '@reduxjs/toolkit';
function setInitialState() {
    return null;
}
const globalSlice = createSlice({
    name: 'global',
    initialState: setInitialState(),
    reducers: {
        setGlobal: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetGlobal: () => {
            return setInitialState();
        },
    },
});
export const { setGlobal, resetGlobal } = globalSlice.actions;
export default globalSlice.reducer;
//# sourceMappingURL=globalSlice.js.map