import { fetchStrapiData } from "../../api/fetchStrapiData";

const contactInfoPageLoader = async () => {
  try {
    const { data } = await fetchStrapiData(
      "api/contact-info-page?populate=contact_infos&populate=defaultSeo&populate[1]=defaultSeo.favicons"
    );
    console.log("Contact Info Page Data:", data); // Log the fetched data for debugging
    return data;
  } catch (error) {
    console.error("Error fetching contact info data:", error);
    return null; // or handle the error as needed
  }
};

export default contactInfoPageLoader;
