import { fetchStrapiData } from '../../api/fetchStrapiData';
const homePageLoader = async ({ locale }) => {
    try {
        const { data } = await fetchStrapiData(`api/home-page?populate=partners&populate[1]=partners.logo&populate=leftColumnImages&populate=centerColumnImages&locale=${locale}`);
        return data;
    }
    catch (error) {
        console.error('Error fetching home page data:', error);
        return null; // or handle the error as needed
    }
};
export default homePageLoader;
//# sourceMappingURL=homePageLoader.js.map