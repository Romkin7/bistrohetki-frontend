import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import {} from 'react';
import { useLoaderData } from 'react-router';
import Heading from '@/shared/Heading/Heading';
const GalleryPage = () => {
    const galleryPageData = useLoaderData();
    return (_jsxs("section", { children: [_jsx(Flex, { direction: "column", align: "center", justify: "center", mb: 8, children: _jsx(Heading, { tag: "h1", variant: "title-1", color: "dark", ariaLabel: galleryPageData?.mainTitle, children: galleryPageData?.mainTitle }) }), _jsx(Grid, { templateColumns: {
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(4, 1fr)',
                }, gap: 4, children: galleryPageData?.images?.map((image) => (_jsx(GridItem, { children: _jsx(Box, { children: _jsx(Image, { src: image.url, alt: image.alternativeText, className: "rounded-lg" }, image.id) }, image.id) }, image.id))) })] }));
};
export default GalleryPage;
//# sourceMappingURL=GalleryPage.js.map