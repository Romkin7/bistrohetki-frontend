export const fetchStrapiData = async (path) => {
    try {
        const response = await fetch(`${import.meta.env.VITE_STRAPI_API_URL}/${path}`);
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        const data = await response.json();
        return data;
    }
    catch (error) {
        console.error('Failed to fetch data from Strapi:', error);
        throw error; // Re-throw the error for further handling
    }
};
//# sourceMappingURL=fetchStrapiData.js.map