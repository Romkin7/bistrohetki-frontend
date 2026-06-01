import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import {} from 'react';
import styles from './Paragraph.module.css';
import { paragraphPropsSchema, } from '@/zod/components/paragraphProps';
const Paragraph = ({ children, ...rest }) => {
    // validate props
    const { color, variant } = paragraphPropsSchema.parse(rest);
    // create styles classes
    const paragraphStyles = clsx({
        [styles.paragraph]: true,
        [styles[`paragraph--${variant}`]]: variant,
        [styles[`paragraph--${color}`]]: color,
    });
    return _jsx("p", { className: paragraphStyles, children: children });
};
export default Paragraph;
//# sourceMappingURL=Paragraph.js.map