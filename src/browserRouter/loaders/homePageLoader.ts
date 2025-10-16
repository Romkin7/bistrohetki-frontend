import { fetchStrapiData } from "../../api/fetchStrapiData";
import type { LoaderProps } from "./loaderProps";

const homePageLoader = async ({ locale = "fi-FI" }: LoaderProps) => {
  try {
    const { data } = await fetchStrapiData(`api/home-page?locale=${locale}`);
    console.log("Home Page Data:", data); // Log the fetched data for debugging
    return data;
  } catch (error) {
    console.error("Error fetching home page data:", error);
    return null; // or handle the error as needed
  }
};

export default homePageLoader;
