import { fetchStrapiData } from "../../api/fetchStrapiData";
import type { LoaderProps } from "./loaderProps";

const contactInfoPageLoader = async ({ locale }: LoaderProps) => {
  try {
    const { data } = await fetchStrapiData(
      `api/contact-info-page?populate=contact_infos&locale=${locale}`
    );
    return data;
  } catch (error) {
    console.error("Error fetching contact info data:", error);
    return null; // or handle the error as needed
  }
};

export default contactInfoPageLoader;
