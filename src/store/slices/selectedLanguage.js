import { createSlice } from '@reduxjs/toolkit';
function setInitialState() {
    return {
        id: 0,
        href: 'fi-FI',
        flagIcon: 'fi',
        locale: 'fi-FI',
    };
}
const selectedLanguageSlice = createSlice({
    name: 'selectedLanguage',
    initialState: setInitialState(),
    reducers: {
        setSelectedLanguage: (state, action) => {
            return { ...state, ...action.payload };
        },
        resetSelectedLanguage: () => {
            return setInitialState();
        },
    },
});
export const { setSelectedLanguage, resetSelectedLanguage } = selectedLanguageSlice.actions;
export default selectedLanguageSlice.reducer;
//# sourceMappingURL=selectedLanguage.js.map