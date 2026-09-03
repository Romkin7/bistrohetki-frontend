import { fetchStrapiData } from '../../api/fetchStrapiData';
import type { LoaderProps } from './loaderProps';

// keep: fetch image, logo, date picker, and all nested form components
const tableBookingPageLoader = async ({ locale }: LoaderProps) => {
    try {
        const { data } = await fetchStrapiData(
            `api/table-booking-page?populate[image]=true&populate[logo]=true&populate[datePickerWithRange]=*&populate[numberOfGuestsForm][populate]=*&populate[ContactLink]=*&locale=${locale}`,
        );
        return data;
    } catch (error) {
        console.error('Error fetching menu page data:', error);
        return null; // or handle the error as needed
    }
};

export default tableBookingPageLoader;
