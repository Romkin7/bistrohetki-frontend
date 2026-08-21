import { Icon } from '@chakra-ui/react/icon';
import clsx from 'clsx';
import { format } from 'date-fns';
import { useState } from 'react';
import type { ChangeEvent, FC, KeyboardEvent } from 'react';

import { IconCalendarAddDate } from '../../../iconLibrary/esm';

import Calendar from './Calendar/Calendar';

import styles from './DatepickerWithRange.module.css';

import Time from '@/shared/Time/Time';
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
    onTimeChange: (value: string) => void;
    time: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DatepickerWithRange: FC<IDatepickerWithRangeProps> = ({
    value,
    onChange,
    onTimeChange,
    time,
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

    const { selectedDate, locale, today } =
        datepickerWithRangePropsSchema.parse(rest);

    const datepickerWithRangeStyles = clsx({
        [styles.datepickerWithRange]: true,
    });

    const handleDateSelect = (selectedDate: Date) => {
        const formattedDate = format(selectedDate, 'yyyy-MM-dd');

        onChange({
            target: {
                name,
                value: formattedDate,
            },
        } as ChangeEvent<HTMLInputElement>);
    };

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
            onKeyDown={(event) => closeOnEsc(event)}
        >
            <label htmlFor={htmlFor}>
                {label}
                {required && (
                    <span
                        className={styles.requiredIndicator}
                        aria-hidden="true"
                    >
                        {' *'}
                    </span>
                )}
            </label>

            <div
                className={styles.inputWrapper}
                aria-label={ariaLabel}
                tabIndex={0}
                onClick={() => handleIsOpen(!isOpen)}
            >
                <input
                    className={styles.input}
                    type="text"
                    name={name}
                    value={value}
                    onChange={onChange}
                    required={required}
                    readOnly={readOnly}
                    disabled={disabled}
                    autoFocus={autoFocus}
                    id={htmlFor}
                />

                <Icon
                    className={styles.calendarIcon}
                    size="sm"
                    aria-label="Select date"
                >
                    <IconCalendarAddDate />
                </Icon>
            </div>

            {isOpen && (
                <Calendar
                    today={today}
                    locale={locale}
                    selectedDate={selectedDate}
                    // onChange={onChange}
                    onDateSelect={handleDateSelect}
                />
            )}
            {isOpen && (
                <Time
                    ariaLabel="Select reservation time"
                    label="Valitse aika"
                    name="time"
                    onChange={onTimeChange}
                    required
                    value={time}
                    options={['15:00', '15:30', '16:00', '21:00', '21:30']}
                />
            )}
        </div>
    );
};

export default DatepickerWithRange;
