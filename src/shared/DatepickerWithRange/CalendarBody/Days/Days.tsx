import clsx from 'clsx';
import {
    addDays,
    endOfMonth,
    format,
    getDay,
    getDaysInMonth,
    startOfMonth,
    subDays,
    subMonths,
} from 'date-fns';
import type { FC, JSX } from 'react';
import getLocale from '../../getLocale';
import getWeekdays from '../../getWeekDays';
import CalendarBody from '../CalendarBody';
import Day from '../Day/Day';
import WeekDay from '../WeekDay/WeekDay';
import styles from './Days.module.css';
import { daysPropsSchema, type DaysProps } from '@/zod/components/daysProps';

interface IDaysProps extends DaysProps {
    onClick: (selectedDate: Date) => void;
}

const Days: FC<IDaysProps> = ({ onClick, ...rest }) => {
    const { selectedDate, activeDate, locale, today, bookableDays } =
        daysPropsSchema.parse(rest);

    const daysInMonth = getDaysInMonth(selectedDate as Date);
    const firstDayDate = startOfMonth(selectedDate as Date);
    const previousMonth = subMonths(selectedDate as Date, 1);
    const previousMonthDays = getDaysInMonth(previousMonth);

    const daysStyles = clsx({
        [styles.days]: true,
    });

    const weekDays = getWeekdays(getLocale(locale));
    const days: JSX.Element[] = [];

    const labels = weekDays.map((weekDay) => {
        return <WeekDay key={weekDay.key}>{weekDay.label}</WeekDay>;
    });

    // Find the BookableDay that belongs to the calendar date
    // const getBookableTimes = (date: Date) => {
    //     const formattedDate = format(date, 'yyyy-MM-dd');
    //     const bookableDay = bookableDays.find(
    //         (day) => day.date === formattedDate,
    //     );
    //     return bookableDay?.times ?? [];
    // };

    const getBookableTimes = (date: Date) => {
        const formattedDate = format(date, 'yyyy-MM-dd');

        for (const bookableDay of bookableDays) {
            if (bookableDay.date === formattedDate) {
                return bookableDay.times;
            }
        }

        return [];
    };

    // Дни от предишния месец
    for (let i = getDay(firstDayDate); i > 1; i--) {
        const previousMonthsDay = previousMonthDays - i + 2;
        const newPreviousMonthDate = subDays(firstDayDate, i - 1);

        days.push(
            <Day
                locale={locale}
                key={format(newPreviousMonthDate, 'dd MM yyyy')}
                selectedDate={newPreviousMonthDate}
                activeDate={activeDate}
                today={today}
                bookableDays={bookableDays}
                times={getBookableTimes(newPreviousMonthDate)}
                onClick={() => onClick(newPreviousMonthDate)}
            >
                {previousMonthsDay}
            </Day>,
        );
    }

    // Дни от текущия месец
    for (let i = 1; i <= daysInMonth; i++) {
        const newCurrentMonthDate = addDays(endOfMonth(previousMonth), i);

        days.push(
            <Day
                locale={locale}
                key={format(newCurrentMonthDate, 'dd MM yyyy')}
                selectedDate={newCurrentMonthDate}
                activeDate={activeDate}
                today={today}
                bookableDays={bookableDays}
                times={getBookableTimes(newCurrentMonthDate)}
                onClick={() => onClick(newCurrentMonthDate)}
            >
                {i}
            </Day>,
        );
    }

    // Дни от следващия месец
    const daysCount = days.length;

    for (let i = 1; i <= 42 - daysCount; i++) {
        const newNextMonthDate = addDays(endOfMonth(selectedDate as Date), i);

        days.push(
            <Day
                locale={locale}
                key={format(newNextMonthDate, 'dd MM yyyy')}
                selectedDate={newNextMonthDate}
                activeDate={activeDate}
                today={today}
                bookableDays={bookableDays}
                times={getBookableTimes(newNextMonthDate)}
                onClick={() => onClick(newNextMonthDate)}
            >
                {i}
            </Day>,
        );
    }

    return (
        <CalendarBody>
            <div className={clsx(daysStyles, styles.weekdays)}>{labels}</div>

            <div className={clsx(daysStyles, styles.dates)}>{days}</div>
        </CalendarBody>
    );
};

export default Days;
