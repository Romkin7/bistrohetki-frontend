import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './Form.module.css';
import { formPropsSchema } from '@/zod/components/formProps';
const Form = ({ children, onReset, onSubmit, ...rest }) => {
    const { action, method, encType, layout, state, ariaLabel, className } = formPropsSchema.parse(rest);
    const formStyles = clsx(styles.form, styles[`form--${layout}`], state && styles[`form--state-${state}`], className);
    return (_jsx("form", { encType: encType, className: formStyles, method: method, onReset: onReset, onSubmit: onSubmit, "aria-label": ariaLabel, action: action, children: children }));
};
export default Form;
//# sourceMappingURL=Form.js.map