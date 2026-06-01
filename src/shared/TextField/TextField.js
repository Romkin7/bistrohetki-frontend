import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Field, HStack, Input } from '@chakra-ui/react';
import clsx from 'clsx';
import styles from './TextField.module.css';
import { textFieldPropsSchema, } from '@/zod/components/textFieldProps';
const TextField = ({ onInput, value, ...rest }) => {
    const { label, htmlFor, name, placeholder, type, required, disabled, readOnly, ariaLabel, className, errorMessage, } = textFieldPropsSchema.parse(rest);
    const textFieldStyles = clsx(styles.textfield, className);
    return (_jsx(HStack, { gap: "10", width: "full", children: _jsxs(Field.Root, { required: required, children: [_jsxs(Field.Label, { className: styles.label, htmlFor: htmlFor, children: [label, required && _jsx(Field.RequiredIndicator, {})] }), _jsx(Input, { id: htmlFor, "aria-label": ariaLabel, readOnly: readOnly, required: required, disabled: disabled, placeholder: placeholder, type: type, name: name, className: textFieldStyles, onInput: onInput, value: value }), errorMessage && (_jsx(Field.ErrorText, { children: errorMessage }))] }) }));
};
export default TextField;
//# sourceMappingURL=TextField.js.map