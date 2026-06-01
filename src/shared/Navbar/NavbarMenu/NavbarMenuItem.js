import { jsx as _jsx } from "react/jsx-runtime";
import { GridItem } from '@chakra-ui/react';
import {} from 'react';
import styles from './NavbarMenuItem.module.css';
import ExternalLink from '@/shared/Link/ExternalLink';
import Link from '@/shared/Link/Link';
const NavbarMenuItem = (link) => {
    return (_jsx(GridItem, { colSpan: 1, className: styles.navbarMenuItem, children: link.isExternal ? (_jsx(ExternalLink, { variant: "navigation", color: "dark", href: link.href, children: link.textContent })) : (_jsx(Link, { variant: "navigation", color: "dark", href: link.href, children: link.textContent })) }));
};
export default NavbarMenuItem;
//# sourceMappingURL=NavbarMenuItem.js.map