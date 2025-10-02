export const fetchStrapiData = async (path: string) => {
  try {
    console.log(
      "Fetching data from Strapi at path:",
      import.meta.env.VITE_STRAPI_API_URL
    );
    const response = await fetch(
      `${import.meta.env.VITE_STRAPI_API_URL}/${path}` // Replace 'your-endpoint' with the actual endpoint you want to fetch
    );
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Failed to fetch data from Strapi:", error);
    throw error; // Re-throw the error for further handling
  }
};
