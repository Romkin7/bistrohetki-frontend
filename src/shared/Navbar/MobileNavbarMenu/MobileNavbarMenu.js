import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Flex, Menu, Portal } from '@chakra-ui/react';
import {} from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router';
import { useLocalizedUrl } from '@/hooks/useLocale';
const MobileNavbarMenu = ({ links }) => {
    const selectedLanguage = useSelector((state) => state.selectedLanguage);
    const { buildUrl } = useLocalizedUrl();
    return (_jsx(Flex, { ml: 4, alignItems: "center", justifyContent: "center", display: { base: 'flex', md: 'none' }, children: _jsxs(Menu.Root, { children: [_jsx(Menu.Trigger, { asChild: true, children: _jsx(Button, { variant: "outline", padding: "1", size: "md", children: "Menu" }) }), _jsx(Portal, { children: _jsx(Menu.Positioner, { children: _jsx(Menu.Content, { children: links?.map((link) => (_jsx(Link, { to: buildUrl(link.href, selectedLanguage.locale), target: "_self", rel: "noopener noreferrer", children: _jsx(Menu.Item, { value: link.textContent, children: link.textContent }) }, link.id))) }) }) })] }) }));
};
export default MobileNavbarMenu;
//# sourceMappingURL=MobileNavbarMenu.js.map