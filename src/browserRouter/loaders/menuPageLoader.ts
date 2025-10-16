import { fetchStrapiData } from "../../api/fetchStrapiData";
import type { LoaderProps } from "./loaderProps";

const menuPageLoader = async ({ locale = "fi-FI" }: LoaderProps) => {
  try {
    const { data } = await fetchStrapiData(
      `api/menu-page?populate=menus&locale=${locale}`
    );
    console.log("Menu Page Data:", data); // Log the fetched data for debugging
    return data;
  } catch (error) {
    console.error("Error fetching menu page data:", error);
    return null; // or handle the error as needed
  }
};

export default menuPageLoader;
