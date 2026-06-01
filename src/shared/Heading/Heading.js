import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './Heading.module.css';
const Heading = ({ tag, children, variant, color }) => {
    const headingStyles = clsx(styles.heading, styles[`heading--${variant}`], styles[`heading--${color}`]);
    function getTag(tag) {
        switch (tag) {
            case 'h1':
                return _jsx("h1", { className: headingStyles, children: children });
            case 'h2':
                return _jsx("h2", { className: headingStyles, children: children });
            case 'h3':
                return _jsx("h3", { className: headingStyles, children: children });
            case 'h4':
                return _jsx("h4", { className: headingStyles, children: children });
            case 'h5':
                return _jsx("h5", { className: headingStyles, children: children });
            case 'h6':
                return _jsx("h6", { className: headingStyles, children: children });
            default:
                return _jsx("h1", { className: headingStyles, children: children }); // Default to h1 if an invalid tag is provided
        }
    }
    return _jsx(_Fragment, { children: getTag(tag) });
};
export default Heading;
//# sourceMappingURL=Heading.js.map