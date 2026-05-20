import { fetchStrapiData } from '../../api/fetchStrapiData';
import type { LoaderProps } from './loaderProps';

const galleryPageLoader = async ({ locale }: LoaderProps) => {
    try {
        const { data } = await fetchStrapiData(
            `api/galleria-page?populate=images&locale=${locale}`,
        );
        return data;
    } catch (error) {
        console.error('Error fetching gallery page data:', error);
        return null; // or handle the error as needed
    }
};

export default galleryPageLoader;
