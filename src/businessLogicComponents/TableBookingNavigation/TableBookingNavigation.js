import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useLoaderData } from 'react-router';
import { useGetGuestsValueText } from '@/hooks/useGetGuestsValueText';
import Link from '@/shared/Link/Link';
import Menu from '@/shared/Menu/Menu';
import Paragraph from '@/shared/Paragraph/Paragraph';
import { tableBookingNavigationSchema, } from '@/zod/businessLogic/tableBookingNavigation';
const TableBookingNavigation = (props) => {
    const tableBookingPageData = useLoaderData();
    const MenuData = tableBookingPageData.Menu;
    const { guests } = tableBookingNavigationSchema.parse(props);
    const guestsValueText = useGetGuestsValueText(guests);
    return (_jsxs(Menu, { ariaLabel: MenuData.ariaLabel, children: [_jsx(Link, { variant: MenuData.MenuLink.variant, href: MenuData.MenuLink.href, color: "dark", children: MenuData.MenuLink.content }), _jsx(Paragraph, { variant: "body", color: "dark", children: guestsValueText })] }));
};
export default TableBookingNavigation;
//# sourceMappingURL=TableBookingNavigation.js.map