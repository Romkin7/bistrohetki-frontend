import { addDays, format } from 'date-fns';
import { fetchStrapiData } from '../../api/fetchStrapiData';
import type { LoaderProps } from './loaderProps';

// keep: fetch image, logo, date picker, and all nested form components
const tableBookingPageLoader = async ({ locale }: LoaderProps) => {
    try {
        const { data } = await fetchStrapiData(
            `api/table-booking-page?populate[image]=true&populate[logo]=true&populate[datePickerWithRange]=*&populate[numberOfGuestsForm][populate]=*&populate[ContactLink]=*&locale=${locale}`,
        );

        const today = new Date();
        const startDate = format(today, 'yyyy-MM-dd');
        const endDate = format(addDays(today, 41), 'yyyy-MM-dd');

        const bookableDays = await fetchStrapiData(
            `${import.meta.env.VITE_STRAPI_BOOKABLE_DAYS_ENDPOINT}?filters[date][$gte]=${startDate}&filters[date][$lte]=${endDate}&populate[bookable_times]=true`,
        );

        return {
            ...data,
            bookableDays: bookableDays.data,
        };
    } catch (error) {
        console.error('Error fetching menu page data:', error);
        return null; // or handle the error as needed
    }
};

export default tableBookingPageLoader;
