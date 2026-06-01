import { jsx as _jsx } from "react/jsx-runtime";
import { Flex } from '@chakra-ui/react';
import clsx from 'clsx';
import styles from './Menu.module.css';
// import type { TableBookingPageData } from "@/zod/pages/tableBookingPageData";
import { menuPropsSchema } from '@/zod/components/menuProps';
const Menu = ({ children, ...rest }) => {
    const { ariaLabel } = menuPropsSchema.parse(rest);
    const menuStyles = clsx(styles.menu);
    return (_jsx(Flex, { as: "nav", "aria-label": ariaLabel, alignItems: "flex-start", justifyContent: "flex-start", gap: "2", width: "100%", className: menuStyles, "box-shadow": "0 4px 10px gray", children: children }));
};
export default Menu;
//# sourceMappingURL=Menu.js.map