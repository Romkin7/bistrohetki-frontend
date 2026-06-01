import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex, Image } from '@chakra-ui/react';
import {} from 'react';
import { useLoaderData } from 'react-router';
import Heading from '@/shared/Heading/Heading';
const LunchMenuPage = () => {
    const lunchMenuPageData = useLoaderData();
    return (_jsxs("section", { children: [_jsx(Flex, { direction: "column", align: "center", justify: "center", mb: 8, children: _jsx(Heading, { tag: "h1", variant: "title-1", color: "dark", ariaLabel: lunchMenuPageData?.mainTitle, children: lunchMenuPageData?.mainTitle }) }), lunchMenuPageData?.menu && (_jsx(Flex, { justifyContent: "center", alignItems: "center", mt: 8, mb: 8, children: _jsx(Box, { maxW: "600px", w: "100%", children: _jsx(Image, { src: lunchMenuPageData?.menu.url, alt: lunchMenuPageData?.menu.alternativeText, className: "rounded-lg" }) }) }))] }));
};
export default LunchMenuPage;
//# sourceMappingURL=LunchMenuPage.js.map