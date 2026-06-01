import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import { useState } from 'react';
import styles from './DatepickerWithRange.module.css';
import { datepickerWithRangePropsSchema, } from '@/zod/components/datepickerWithRangeProps';
const datepickerWithRange = ({ value, ...rest }) => {
    const [isOpen, setIsOpen] = useState(() => false);
    const { dfrom, dto, date, locale, dateField, ariaLabel } = datepickerWithRangePropsSchema.parse(rest);
    const datepickerWithRangeStyles = clsx({
        [styles.datepickerWithRange]: true,
    });
    const closeOnEsc = (event) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };
    return (_jsx("div", { className: datepickerWithRangeStyles, "aria-label": ariaLabel, onKeyDown: (event) => {
            closeOnEsc(event);
        } }));
};
export default datepickerWithRange;
//# sourceMappingURL=DatepickerWithRange.js.map