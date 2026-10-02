import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { BookableDay } from '@/zod/collections/bookableDay';

const bookableDaySlice = createSlice({
    name: 'bookableDays',
    initialState: [] as BookableDay[],
    reducers: {
        setBookableDays: (_state, action: PayloadAction<BookableDay[]>) =>
            action.payload,
        resetBookableDays: () => [],
    },
});

export const { setBookableDays, resetBookableDays } = bookableDaySlice.actions;
export default bookableDaySlice.reducer;
