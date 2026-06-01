import { jsx as _jsx } from "react/jsx-runtime";
import { Flex } from '@chakra-ui/react';
import {} from 'react';
import styles from './NavbarMenu.module.css';
const NavbarMenu = ({ children, display, ...props }) => {
    return (_jsx(Flex, { alignItems: "center", justifyContent: "flex-start", className: styles.navbarMenu, display: display, ...props, children: children }));
};
export default NavbarMenu;
//# sourceMappingURL=NavbarMenu.js.map