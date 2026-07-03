import { Icon } from '@chakra-ui/react/icon';
import clsx from 'clsx';
import { useState } from 'react';
import type { ChangeEvent, FC, KeyboardEvent } from 'react';
import { IconCalendarAddDate } from '../../../iconLibrary/esm';
import Calendar from './Calendar/Calendar';
import styles from './DatepickerWithRange.module.css';
import {
    datepickerWithRangePropsSchema,
    type DatepickerWithRangeProps,
} from '@/zod/components/datepickerWithRangeProps';

import {
    textFieldPropsSchema,
    type TextFieldProps,
} from '@/zod/components/textFieldProps';

interface IDatepickerWithRangeProps
    extends DatepickerWithRangeProps, TextFieldProps {
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DatepickerWithRange: FC<IDatepickerWithRangeProps> = ({
    value,
    onChange,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState(false);
    const {
        htmlFor,
        label,
        name,
        required,
        disabled,
        readOnly,
        ariaLabel,
        autoFocus,
    } = textFieldPropsSchema.parse(rest);
    const { dfrom, dto, date, locale } =
        datepickerWithRangePropsSchema.parse(rest);
    const datepickerWithRangeStyles = clsx({
        [styles.datepickerWithRange]: true,
    });

    const handleIsOpen = (isOpen: boolean) => {
        setIsOpen(isOpen);
    };

    const closeOnEsc = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    return (
        <div
            className={datepickerWithRangeStyles}
            aria-label={ariaLabel}
            onKeyDown={(event: KeyboardEvent<HTMLDivElement>) =>
                closeOnEsc(event)
            }
        >
            <label htmlFor={htmlFor}>{label}</label>
            <div
                className={datepickerWithRangeStyles}
                aria-label={ariaLabel}
                tabIndex={0}
                onClick={() => handleIsOpen(!isOpen)}
            >
                <input
                    type="text"
                    name={name}
                    value={value}
                    required={required}
                    readOnly={readOnly}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    onChange={onChange}
                    id={htmlFor}
                />
                <Icon size="sm" aria-label="Select date">
                    <IconCalendarAddDate />
                </Icon>
            </div>
            {isOpen && (
                <Calendar
                    locale={locale}
                    dfrom={dfrom}
                    dto={dto}
                    date={date}
                    onChange={onChange}
                />
            )}
        </div>
    );
};

export default DatepickerWithRange;
