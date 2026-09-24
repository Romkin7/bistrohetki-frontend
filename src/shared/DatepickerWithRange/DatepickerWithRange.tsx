import { Field, HStack, Input } from '@chakra-ui/react';
import { Icon } from '@chakra-ui/react/icon';
import clsx from 'clsx';
import { format, isValid, parseISO } from 'date-fns';
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
    timeLabel: string;
    timeAriaLabel: string;
    time: string;
    value: string;
    onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const DatepickerWithRange: FC<IDatepickerWithRangeProps> = ({
    value,
    onChange,
    onTimeChange,
    timeAriaLabel,
    timeLabel,
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

    const { selectedDate, locale, today, bookableDays } =
        datepickerWithRangePropsSchema.parse(rest);

    const [calendarDate, setCalendarDate] = useState<Date>(
        selectedDate ?? today,
    );

    const valueDate = value ? parseISO(value) : null;

    const activeDate =
        valueDate && isValid(valueDate) ? valueDate : calendarDate;

    const selectedBookableDay = bookableDays.find(
        (day) => day.date === format(activeDate, 'yyyy-MM-dd'),
    );

    const bookableTimes = selectedBookableDay?.times ?? [];

    const datepickerWithRangeStyles = clsx({
        [styles.datepickerWithRange]: true,
    });

    const handleDateSelect = (newSelectedDate: Date) => {
        const formattedDate = format(newSelectedDate, 'yyyy-MM-dd');

        setCalendarDate(newSelectedDate);

        onChange({
            target: {
                name,
                value: formattedDate,
            },
        } as ChangeEvent<HTMLInputElement>);
    };

    const closeOnEsc = (event: KeyboardEvent<HTMLElement>) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    return (
        <HStack className={styles.datepickerWithRangeWrapper}>
            <Field.Root
                required={required}
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
                    <>
                        <Calendar
                            today={today}
                            locale={locale}
                            selectedDate={selectedDate}
                            activeDate={activeDate}
                            bookableDays={bookableDays}
                            onDateSelect={handleDateSelect}
                        />

                        <Time
                            ariaLabel={timeAriaLabel}
                            label={timeLabel}
                            name="time"
                            onChange={onTimeChange}
                            required
                            value={time}
                            options={bookableTimes}
                        />
                    </>
                )}
            </Field.Root>
        </HStack>
    );
};

export default DatepickerWithRange;
