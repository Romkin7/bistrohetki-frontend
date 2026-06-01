import { fetchStrapiData } from '../../api/fetchStrapiData';
const lunchMenuPageLoader = async ({ locale }) => {
    try {
        const { data } = await fetchStrapiData(`api/lunch-menu-page?populate=menu&locale=${locale}`);
        return data;
    }
    catch (error) {
        console.error('Error fetching menu page data:', error);
        return null; // or handle the error as needed
    }
};
export default lunchMenuPageLoader;
//# sourceMappingURL=lunchMenuPageLoader.js.map