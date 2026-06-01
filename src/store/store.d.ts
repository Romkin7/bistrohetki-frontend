export type RootState = ReturnType<typeof store.getState>;
declare const store: import("@reduxjs/toolkit").EnhancedStore<{
    global: unknown;
    message: unknown;
    selectedLanguage: unknown;
}, import("redux").UnknownAction, import("@reduxjs/toolkit").Tuple<[import("redux").StoreEnhancer<{
    dispatch: import("redux-thunk").ThunkDispatch<{
        global: unknown;
        message: unknown;
        selectedLanguage: unknown;
    }, undefined, import("redux").UnknownAction>;
}>, import("redux").StoreEnhancer]>>;
export default store;
//# sourceMappingURL=store.d.ts.map