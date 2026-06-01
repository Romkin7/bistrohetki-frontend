import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import Button from '../Button/Button';
import styles from './IconButton.module.css';
import { iconButtonPropsSchema, } from '@/zod/components/iconButtonProps';
const IconButton = ({ children, ...rest }) => {
    const { disabled, size, ariaLabel, className } = iconButtonPropsSchema.parse(rest);
    const iconButtonStyles = clsx({
        [styles.iconButton]: true,
        className,
    });
    return (_jsx(Button, { type: "button", variant: "light", shape: "circle", size: size, ariaLabel: ariaLabel, disabled: disabled, className: iconButtonStyles, children: children }));
};
export default IconButton;
//# sourceMappingURL=IconButton.js.map