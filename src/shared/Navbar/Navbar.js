import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Flex, Group, Icon } from '@chakra-ui/react';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router';
import { IconFacebook, IconInstagram, IconTiktok, } from '../../../iconLibrary/esm';
import LanguageSelect from '../LanguageSelect/LanguageSelect';
import ExternalLink from '../Link/ExternalLink';
import toUpperCase from '../utils/toUpperCase';
import Brand from './Brand/Barnd';
import MobileNavbarMenu from './MobileNavbarMenu/MobileNavbarMenu';
import styles from './Navbar.module.css';
import NavbarMenu from './NavbarMenu/NavbarMenu';
import NavbarMenuItem from './NavbarMenu/NavbarMenuItem';
import { useLocalizedUrl } from '@/hooks/useLocale';
import { setSelectedLanguage } from '@/store/slices/selectedLanguage';
const Navbar = () => {
    const global = useSelector((state) => state.global);
    const selectedLanguage = useSelector((state) => state.selectedLanguage);
    const dispatch = useDispatch();
    const path = useLocation().pathname;
    const locale = !['fi-FI', 'es-ES', 'en'].includes(path.split('/')[1])
        ? 'fi-FI'
        : path.split('/')[1];
    useEffect(() => {
        if (selectedLanguage.locale !== locale) {
            dispatch(setSelectedLanguage({
                locale: locale,
                href: locale === 'fi-FI'
                    ? '/fi-FI'
                    : locale === 'es-ES'
                        ? '/es-ES'
                        : '/en',
                flagIcon: locale === 'fi-FI'
                    ? 'fi'
                    : locale === 'es-ES'
                        ? 'es'
                        : 'en',
                id: 99,
            }));
        }
    }, [dispatch, locale, path, selectedLanguage]);
    const { buildUrl } = useLocalizedUrl();
    return (_jsx("nav", { className: styles.navbar, children: _jsxs(Flex, { children: [_jsx(Brand, { image: {
                        src: global?.navbar.brandImage.url,
                        alt: global?.navbar.brandImage.name,
                        title: global?.navbar.brandImage.name,
                    }, ariaLabel: global?.navbar.brandImage.name }), _jsx(NavbarMenu, { display: { base: 'none', md: 'flex' }, children: global?.navbar.navbarLinks.map((link) => (_jsx(NavbarMenuItem, { href: buildUrl(link.href, selectedLanguage.locale), isExternal: link.isExternal, locale: link.locale, textContent: toUpperCase(link.textContent), id: link.id }, link.id))) }), _jsx(MobileNavbarMenu, { links: global?.navbar.navbarLinks }), _jsx(Group, { ml: "auto", children: global?.navbar?.socialLinks?.map((link) => (_jsx(ExternalLink, { href: link.href, external: true, variant: "inline", color: "dark", children: _jsxs(Icon, { size: "lg", "aria-label": link.textContent, children: [link.icon === 'facebook' && _jsx(IconFacebook, {}), link.icon === 'instagram' && _jsx(IconInstagram, {}), link.icon === 'tiktok' && _jsx(IconTiktok, {})] }) }, link.id))) }), _jsx(Flex, { alignItems: "center", ml: "4", children: _jsx(LanguageSelect, {}) })] }) }));
};
export default Navbar;
//# sourceMappingURL=Navbar.js.map