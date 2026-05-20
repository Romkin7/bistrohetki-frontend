import { fetchStrapiData } from '../../api/fetchStrapiData';
import type { LoaderProps } from './loaderProps';

// keep: fetch image, logo, and all nested components in numberOfGuestsForm
const tableBookingPageLoader = async ({ locale }: LoaderProps) => {
    try {
        const { data } = await fetchStrapiData(
            `api/table-booking-page?populate[image]=true&populate[logo]=true&populate[numberOfGuestsForm][populate]=*&populate[ContactLink]=*&locale=${locale}`,
        );
        return data;
    } catch (error) {
        console.error('Error fetching menu page data:', error);
        return null; // or handle the error as needed
    }
};

export default tableBookingPageLoader;
