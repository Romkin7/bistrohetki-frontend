import { Field, HStack, Input } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react/icon';
import clsx from 'clsx';
import { format } from 'date-fns';
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
    onTimeChange: (value: string) => void;
    time: string;
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

    // const handleIsOpen = (isOpen: boolean) => {
    //     setIsOpen(isOpen);
    // };

    const closeOnEsc = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    return (
        <HStack gap="10" width="50%">
            <Field.Root
                required={required}
                width="100%"
                className={datepickerWithRangeStyles}
                onKeyDown={closeOnEsc}
            >
                <Field.Label className={styles.label} htmlFor={htmlFor}>
                    {label}

                    {required && <Field.RequiredIndicator />}
                </Field.Label>

                <div
                    className={styles.inputWrapper}
                    tabIndex={0}
                    onClick={() => setIsOpen(!isOpen)}
                >
                    <Input
                        id={htmlFor}
                        aria-label={ariaLabel}
                        readOnly={readOnly}
                        required={required}
                        disabled={disabled}
                        autoFocus={autoFocus}
                        type="text"
                        name={name}
                        value={value}
                        onChange={onChange}
                        className={styles.textfield}
                    />

                    <Icon className={styles.calendarIcon} size="sm">
                        <IconCalendarAddDate />
                    </Icon>
                </div>

                {isOpen && (
                    <Calendar
                        today={today}
                        locale={locale}
                        selectedDate={selectedDate}
                        onDateSelect={handleDateSelect}
                    />
                )}
            </Field.Root>
        </HStack>
    );
};

export default DatepickerWithRange;
