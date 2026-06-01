import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Card, Flex, Grid, Image } from '@chakra-ui/react';
import {} from 'react';
import Markdown from 'react-markdown';
import { useLoaderData } from 'react-router';
import rehypeRaw from 'rehype-raw';
import Heading from '@/shared/Heading/Heading';
const HomePage = () => {
    const homePageData = useLoaderData();
    return (_jsxs("section", { children: [_jsxs(Flex, { direction: "column", align: "center", justify: "center", mb: 8, children: [_jsx(Heading, { tag: "h1", variant: "title-1", color: "dark", ariaLabel: homePageData?.mainTitle, children: homePageData?.mainTitle }), _jsx(Markdown, { rehypePlugins: [rehypeRaw], children: homePageData?.content })] }), _jsx(Flex, { direction: "column", align: "center", justify: "center", mb: 8, children: _jsxs(Grid, { templateColumns: {
                        base: 'repeat(1, 1fr)',
                        md: 'repeat(3, 1fr)',
                    }, gap: 4, children: [_jsx(Box, { children: homePageData?.leftColumnImages?.map((image) => (_jsx(Box, { mb: 4, children: _jsx(Image, { src: image.url, alt: image.alternativeText, title: image.alternativeText }) }, image.id))) }), _jsx(Box, { children: homePageData?.centerColumnImages?.map((image) => (_jsx(Box, { mb: 4, children: _jsx(Image, { src: image.url, alt: image.alternativeText, title: image.alternativeText }) }, image.id))) }), _jsxs(Box, { children: [_jsx(Box, { mb: 6, children: _jsx(Heading, { tag: "h3", variant: "title-3", color: "dark", ariaLabel: homePageData?.partnersTitle, children: homePageData?.partnersTitle }) }), homePageData?.partners?.map((partner) => (_jsx("a", { href: partner.href, target: "_blank", rel: "noopener noreferrer", children: _jsxs(Card.Root, { flexDirection: "row", overflow: "hidden", maxW: "xl", mb: 4, children: [_jsx(Image, { objectFit: "contain", maxW: "200px", src: partner.logo.url, alt: "Caffe Latte" }), _jsx(Box, { children: _jsx(Card.Body, { children: _jsx(Flex, { direction: "column", justifyContent: "center", alignItems: "center", height: "100%", children: _jsx(Card.Title, { mb: "2", children: partner.name }) }) }) })] }, partner.id) }, partner.id)))] })] }) })] }));
};
export default HomePage;
//# sourceMappingURL=HomePage.js.map