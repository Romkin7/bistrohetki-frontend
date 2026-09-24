import clsx from 'clsx';
import { addMonths, subMonths } from 'date-fns';
import { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import type { Operand } from '../../../zod/operand';
import Days from '../CalendarBody/Days/Days';
import CalendarHead from '../CalendarHead/CalendarHead';
import styles from './Calendar.module.css';
import {
    calendarPropsSchema,
    type calendarProps as CalendarProps,
} from '@/zod/components/calendarProps';

interface ICalendarProps extends CalendarProps, PropsWithChildren {
    onDateSelect: (selectedDate: Date) => void;
}

const Calendar: FC<ICalendarProps> = ({ children, onDateSelect, ...rest }) => {
    const { locale, selectedDate, activeDate, today, bookableDays } =
        calendarPropsSchema.parse(rest);

    const [currentMonth, setCurrentMonth] = useState(selectedDate ?? today);

    const calendarStyles = clsx({
        [styles.calendar]: true,
    });

    const resetCalendar = () => {
        setCurrentMonth(selectedDate ?? today);
    };

    const changeMonth = (operand: Operand) => {
        setCurrentMonth((prev) =>
            operand === 'sub' ? subMonths(prev, 1) : addMonths(prev, 1),
        );
    };

    const changeDate = (selectedDate: Date) => {
        // keep: the clicked date stays active while the calendar remains open
        setCurrentMonth(selectedDate);
        onDateSelect(selectedDate);
    };

    return (
        <div className={calendarStyles}>
            <CalendarHead
                today={today}
                locale={locale}
                selectedDate={currentMonth}
                changeMonth={changeMonth}
                resetCalendar={resetCalendar}
            />

            {children}

            <Days
                today={today}
                locale={locale}
                selectedDate={currentMonth}
                activeDate={activeDate}
                bookableDays={bookableDays}
                onClick={changeDate}
            />
        </div>
    );
};

export default Calendar;
