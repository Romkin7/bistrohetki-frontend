import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Grid, GridItem, Image } from '@chakra-ui/react';
import { useState } from 'react';
import Markdown from 'react-markdown';
import { useLoaderData } from 'react-router';
import rehypeRaw from 'rehype-raw';
import remarkGfm from 'remark-gfm';
import styles from '../App.module.css';
import TableBookingPageForm from '@/businessLogicComponents/TableBookingPageForm/TableBookingPageForm';
import Heading from '@/shared/Heading/Heading';
import Link from '@/shared/Link/Link';
const TableBookingPage = () => {
    const tableBookingPageData = useLoaderData();
    const [guests, setGuests] = useState(0);
    const handleSubmit = async (event) => {
        event.preventDefault();
    };
    const handleReset = (event) => {
        event.preventDefault();
        setGuests(0); // или друга логика за нулиране на формата
    };
    return (_jsxs("section", { children: [_jsx(Flex, { direction: "column", align: "center", justify: "center", mb: 8, children: _jsx(Heading, { tag: "h1", variant: "title-1", color: "dark", ariaLabel: tableBookingPageData?.mainTitle, children: tableBookingPageData?.mainTitle }) }), _jsx(Flex, { direction: "column", align: "center", justify: "center", mb: 6, children: _jsxs(Grid, { templateColumns: { base: '1fr', md: '2fr 1fr' }, gap: 4, children: [_jsxs(GridItem, { h: "100%", className: styles.yellowBackground, children: [_jsx(TableBookingPageForm, { handleSubmit: handleSubmit, handleReset: handleReset, guests: guests, setGuests: setGuests }), _jsxs(Flex, { direction: "column", align: "center", justify: "center", mt: "10", mb: "6", children: [_jsx(Markdown, { rehypePlugins: [rehypeRaw], remarkPlugins: [remarkGfm], children: tableBookingPageData?.tableBookingInfo }), tableBookingPageData?.ContactLink && (_jsx(Link, { href: tableBookingPageData.ContactLink.href, variant: tableBookingPageData.ContactLink.variant, color: "medium", children: tableBookingPageData.ContactLink.content }))] }), _jsx(Flex, { justify: "center", mb: "8", align: "center", children: _jsx(Image, { width: "30%", src: tableBookingPageData?.logo?.url, alt: tableBookingPageData?.logo
                                            ?.alternativeText || 'Hetki logo', fit: "contain", "aria-label": tableBookingPageData?.logo
                                            ?.alternativeText || 'Hetki logo' }) })] }), _jsx(GridItem, { h: "100%", children: _jsx(Image, { objectFit: "cover", src: tableBookingPageData?.image?.url, alt: tableBookingPageData?.image?.alternativeText ||
                                    'Table booking image' }) })] }) })] }));
};
export default TableBookingPage;
//# sourceMappingURL=TableBookingPage.js.map