import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './Link.module.css';
const variantClasses = {
    standalone: 'standalone',
    inline: 'inline',
    navigation: 'navigation',
};
const ExternalLink = ({ variant, href, children, color }) => {
    const linkStyles = clsx(styles.link, styles[`link--${variantClasses[variant]}`], styles[`link--${color}`]);
    return (_jsx("a", { href: href, className: linkStyles, target: '_blank', rel: "noopener noreferrer", referrerPolicy: "no-referrer", children: children }));
};
export default ExternalLink;
//# sourceMappingURL=ExternalLink.js.map