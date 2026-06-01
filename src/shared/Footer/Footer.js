import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Box, Flex, Icon } from '@chakra-ui/react';
import {} from 'react';
import { useSelector } from 'react-redux';
import { IconFacebook, IconInstagram, IconTiktok, } from '../../../iconLibrary/esm';
import Heading from '../Heading/Heading';
import ExternalLink from '../Link/ExternalLink';
import Paragraph from '../Paragraph/Paragraph';
import styles from './Footer.module.css';
const Footer = () => {
    const global = useSelector((state) => state.global);
    return (_jsxs("footer", { className: styles.footer, children: [_jsx(Flex, { direction: { base: 'column', md: 'row' }, justify: "space-between", mb: { base: 4, md: 0 }, children: global?.footer.sections.map((section) => (_jsxs(Box, { mb: { base: 4, md: 0 }, children: [_jsx(Heading, { tag: "h3", variant: "title-3", color: "light", ariaLabel: section.sectionTitle, children: section.sectionTitle }), section.contactInfos?.map((info) => (_jsx(Box, { mt: 2, children: _jsxs(Paragraph, { variant: "body", color: "light", children: [info.linkText, ' ', _jsx(ExternalLink, { href: info.href, target: "_blank", rel: "noopener noreferrer", variant: "inline", color: "light", children: info.textContent })] }) }, info.id))), section.socialLinks?.map((link) => (_jsx(Box, { mt: 2, children: _jsxs(ExternalLink, { href: link.href, external: true, variant: "standalone", color: "light", children: [_jsxs(Icon, { size: "lg", "aria-label": link.textContent, children: [link.icon === 'facebook' && (_jsx(IconFacebook, {})), link.icon === 'instagram' && (_jsx(IconInstagram, {})), link.icon === 'tiktok' && (_jsx(IconTiktok, {}))] }), _jsx("span", { children: link.textContent })] }) }, link.id)))] }, section.id))) }), _jsx(Flex, { direction: "column", justify: "center", align: "center", mt: { base: 8, md: 5 }, children: _jsxs(Paragraph, { variant: "body", color: "light", children: ["\u00A9 ", new Date().getFullYear(), " BistroHetki. All rights reserved."] }) })] }));
};
export default Footer;
//# sourceMappingURL=Footer.js.map