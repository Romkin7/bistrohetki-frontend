import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import { Link as RouterLink } from 'react-router';
import styles from './Link.module.css';
import { linkPropsSchema } from '@/zod/components/linkProps';
const Link = ({ children, ...rest }) => {
    const { variant, color, href } = linkPropsSchema.parse(rest);
    const linkStyles = clsx(styles.link, styles[`link--${variant}`], styles[`link--${color}`]);
    return (_jsx(RouterLink, { to: href, className: linkStyles, target: "_self", rel: "noopener noreferrer", referrerPolicy: "no-referrer", children: children }));
};
export default Link;
//# sourceMappingURL=Link.js.map