import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex, Image, Grid, GridItem } from '@chakra-ui/react';
import {} from 'react';
import { useLoaderData } from 'react-router';
import Heading from '@/shared/Heading/Heading';
import Paragraph from '@/shared/Paragraph/Paragraph';
const MenuPage = () => {
    const menuPageData = useLoaderData();
    return (_jsxs("section", { children: [_jsxs(Flex, { direction: "column", align: "center", justify: "center", mb: 8, children: [_jsx(Heading, { tag: "h1", variant: "title-1", color: "dark", ariaLabel: menuPageData?.mainTitle, children: menuPageData?.mainTitle }), _jsx(Paragraph, { variant: "body", color: "dark", children: menuPageData?.subTitle })] }), _jsx(Grid, { templateColumns: {
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(3, 1fr)',
                }, gap: 4, children: menuPageData?.menus?.map((menu) => (_jsx(GridItem, { children: _jsx(Box, { mx: 4, mb: 8, p: 4, borderWidth: "1px", borderRadius: "lg", children: _jsx(Image, { src: menu.url, alt: menu.alternativeText, fit: "contain", "aria-label": menu.alternativeText }) }, menu.id) }, menu.id))) })] }));
};
export default MenuPage;
//# sourceMappingURL=MenuPage.js.map