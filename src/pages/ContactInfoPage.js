import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Grid, GridItem } from '@chakra-ui/react';
import {} from 'react';
import Markdown from 'react-markdown';
import { useLoaderData } from 'react-router';
import Heading from '@/shared/Heading/Heading';
import Link from '@/shared/Link/Link';
import Map from '@/shared/Map/Map';
import Paragraph from '@/shared/Paragraph/Paragraph';
const ContactInfoPage = () => {
    const contactInfoPageData = useLoaderData(); // Gets data from contactInfoPageLoader
    return (_jsxs("section", { children: [_jsx(Flex, { direction: "column", align: "center", justify: "center", mb: 8, children: _jsx(Heading, { tag: "h1", variant: "title-1", color: "dark", ariaLabel: contactInfoPageData?.mainTitle, children: contactInfoPageData?.mainTitle }) }), _jsxs(Grid, { templateColumns: {
                    base: 'repeat(1, 1fr)',
                    md: 'repeat(2, 1fr)',
                }, gap: 4, children: [_jsx(GridItem, { children: _jsx(Markdown, { children: contactInfoPageData?.content }) }), _jsxs(GridItem, { children: [contactInfoPageData?.contact_infos.map((info) => (_jsxs("div", { className: "mb-4 d-flex flex-row gap-2", children: [_jsx(Paragraph, { variant: "body", color: "dark", children: info.linkText }), _jsx(Link, { variant: "inline", color: "dark", href: info.href, className: "text-blue-500 hover:underline", children: info.textContent })] }, info.id))), _jsx(Map, {})] })] })] }));
};
export default ContactInfoPage;
//# sourceMappingURL=ContactInfoPage.js.map