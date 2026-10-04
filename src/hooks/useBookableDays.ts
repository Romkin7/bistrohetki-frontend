import { addDays, format } from 'date-fns';
import { useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';
import { fetchStrapiData } from '@/api/fetchStrapiData';
import { getCalendarDays } from '@/shared/utils/numberOfDays';
import {
    resetBookableDays,
    setBookableDays,
} from '@/store/slices/bookableDaySlice';
import type { BookableDay } from '@/zod/collections/bookableDay';

// Strapi returns 25 entries per page by default, the calendar needs up to 42
const CALENDAR_DAYS = 42;

export const useBookableDays = () => {
    const dispatch = useDispatch();
    const isMounted = useRef(false);

    const fetchBookableDays = useCallback(async () => {
        try {
            const today = new Date();
            const { activeDays } = getCalendarDays(today);
            const startDate = format(today, 'yyyy-MM-dd');
            const endDate = format(
                addDays(today, activeDays - 1),
                'yyyy-MM-dd',
            );

            const { data } = await fetchStrapiData(
                `${import.meta.env.VITE_STRAPI_BOOKABLE_DAYS_ENDPOINT}?filters[date][$gte]=${startDate}&filters[date][$lte]=${endDate}&pagination[pageSize]=${CALENDAR_DAYS}&sort=date:asc&populate[bookable_times]=true`,
            );

            // a late response must not refill the store after the page is left
            if (isMounted.current) {
                dispatch(setBookableDays(data as BookableDay[]));
            }
        } catch (error) {
            console.error('Failed to fetch bookable days:', error);
        }
    }, [dispatch]);

    const clearBookableDays = useCallback(() => {
        dispatch(resetBookableDays());
    }, [dispatch]);

    useEffect(() => {
        isMounted.current = true;
        fetchBookableDays();

        return () => {
            isMounted.current = false;
            clearBookableDays();
        };
    }, [fetchBookableDays, clearBookableDays]);
};
