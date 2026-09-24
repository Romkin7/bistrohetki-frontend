import { addDays, format } from 'date-fns';
import z from 'zod';
import { fetchStrapiData } from '../../api/fetchStrapiData';
import type { LoaderProps } from './loaderProps';
import type { BookableDay } from '@/zod/collections/bookableDay';
import { bookableTimeSchema } from '@/zod/collections/bookableTime';
import type { TableBookingPageData } from '@/zod/pages/tableBookingPageData';

const BOOKABLE_DAYS_COUNT = 42;

const BOOKABLE_TIMES_ENDPOINT = `${import.meta.env.VITE_STRAPI_API_URL}${import.meta.env.VITE_STRAPI_BOOKABLE_TIMES_ENDPOINT}`;

const fetchBookableDays = async (
    startDate: Date,
    numberOfDays: number,
): Promise<BookableDay[]> => {
    if (!import.meta.env.VITE_STRAPI_BOOKABLE_TIMES_ENDPOINT) {
        throw new Error(
            'VITE_STRAPI_BOOKABLE_TIMES_ENDPOINT is not configured',
        );
    }

    const endDate = addDays(startDate, numberOfDays - 1);

    const params = new URLSearchParams({
        'filters[date][$gte]': format(startDate, 'yyyy-MM-dd'),
        'filters[date][$lte]': format(endDate, 'yyyy-MM-dd'),
        'populate[bookable_day]': 'true',
        'pagination[pageSize]': String(numberOfDays),
        'sort[0]': 'date:asc',
        'sort[1]': 'startTime:asc',
    });

    const response = await fetch(
        `${BOOKABLE_TIMES_ENDPOINT}?${params.toString()}`,
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();

    const bookableTimes = z.array(bookableTimeSchema).parse(responseData.data);

    const days = new Map<string, BookableDay>();

    bookableTimes.forEach((bookableTime) => {
        if (bookableTime.isBooked || bookableTime.capacity <= 0) {
            return;
        }

        const existingDay = days.get(bookableTime.date);

        if (existingDay) {
            existingDay.times.push(bookableTime.startTime.slice(0, 5));
            return;
        }

        days.set(bookableTime.date, {
            date: bookableTime.date,
            times: [bookableTime.startTime.slice(0, 5)],
            weekday: bookableTime.bookable_day?.weekday,
            opensAt: bookableTime.bookable_day?.opensAt,
            closesAt: bookableTime.bookable_day?.closesAt,
            isClosed: bookableTime.bookable_day?.isClosed,
        });
    });

    return [...days.values()];
};

const tableBookingPageLoader = async ({ locale }: LoaderProps) => {
    try {
        const { data } = await fetchStrapiData(
            `api/table-booking-page?populate[image]=true&populate[logo]=true&populate[datePickerWithRange]=*&populate[numberOfGuestsForm][populate]=*&populate[ContactLink]=*&locale=${locale}`,
        );

        const bookableDays = await fetchBookableDays(
            new Date(),
            BOOKABLE_DAYS_COUNT,
        );

        return {
            ...data,
            bookableDays,
        } as TableBookingPageData & {
            bookableDays: BookableDay[];
        };
    } catch (error) {
        console.error('Error fetching table booking page data:', error);
        return null;
    }
};

export default tableBookingPageLoader;
