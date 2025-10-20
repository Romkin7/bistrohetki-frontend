import { fetchStrapiData } from "../../api/fetchStrapiData";
import type { LoaderProps } from "./loaderProps";

const homePageLoader = async ({ locale }: LoaderProps) => {
  try {
    const { data } = await fetchStrapiData(
      `api/home-page?populate=partners&populate[1]=partners.logo&populate=leftColumnImages&populate=centerColumnImages&locale=${locale}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null; // or handle the error as needed
  }
};

export default homePageLoader;
