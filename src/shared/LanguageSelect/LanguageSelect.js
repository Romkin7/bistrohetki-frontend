import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, Icon, Menu, Portal } from '@chakra-ui/react';
import {} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useLocation } from 'react-router';
import { IconEn, IconEs, IconFi } from '../../../iconLibrary/esm';
import { useLocalizedUrl } from '@/hooks/useLocale';
import { setSelectedLanguage } from '@/store/slices/selectedLanguage';
const LanguageSelect = () => {
    const dispatch = useDispatch();
    const global = useSelector((state) => state.global);
    const selectedLanguage = useSelector((state) => state.selectedLanguage);
    const path = useLocation().pathname;
    const { buildUrl } = useLocalizedUrl();
    const handleClick = (lang) => {
        dispatch(setSelectedLanguage(lang));
    };
    const navbar = global?.navbar;
    return (_jsxs(Menu.Root, { children: [_jsx(Menu.Trigger, { asChild: true, children: _jsx(Button, { variant: "outline", padding: "1", size: "sm", children: _jsxs(Icon, { size: "md", children: [selectedLanguage.flagIcon === 'en' && _jsx(IconEn, {}), selectedLanguage.flagIcon === 'fi' && _jsx(IconFi, {}), selectedLanguage.flagIcon === 'es' && _jsx(IconEs, {})] }) }) }), _jsx(Portal, { children: _jsx(Menu.Positioner, { children: _jsx(Menu.Content, { children: navbar?.languageSelectLinks.map((lang) => (_jsx(Link, { to: buildUrl(path, lang.href), onClick: () => handleClick(lang), children: _jsxs(Menu.Item, { value: lang.href, children: [_jsxs(Icon, { size: "sm", children: [lang.flagIcon === 'en' && (_jsx(IconEn, {})), lang.flagIcon === 'fi' && (_jsx(IconFi, {})), lang.flagIcon === 'es' && (_jsx(IconEs, {}))] }), lang.textContent] }) }, lang.id))) }) }) })] }));
};
export default LanguageSelect;
//# sourceMappingURL=LanguageSelect.js.map