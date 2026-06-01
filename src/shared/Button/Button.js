import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './Button.module.css';
import { buttonPropsSchema, } from '@/zod/components/buttonProps';
const Button = ({ children, onClick, ...rest }) => {
    const { variant, size, shape, disabled, ariaLabel, type } = buttonPropsSchema.parse(rest);
    const buttonStyles = clsx(styles.button, styles[`button--${variant}`], styles[`button--${shape}`], styles[`button--${size}`]);
    return (_jsx("button", { "aria-label": ariaLabel, type: type, disabled: disabled, className: buttonStyles, onClick: onClick, children: children }));
};
export default Button;
//# sourceMappingURL=Button.js.map