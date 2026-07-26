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
    const { selectedDate, locale } = daysPropsSchema.parse(rest);
    const today = new Date();
    const daysInMonth = getDaysInMonth(selectedDate as Date);
    const firstDayDate = startOfMonth(selectedDate as Date);
    const previousMonth = subMonths(selectedDate as Date, 1);
    const previousMonthDays = getDaysInMonth(previousMonth);
    const daysStyles = clsx({ [styles.days]: true });
    const weekDays = getWeekdays(getLocale(locale));
    const days: JSX.Element[] = [];
    const labels = weekDays.map((weekDay) => {
        return <WeekDay key={weekDay.key}>{weekDay.label}</WeekDay>;
    });

    for (let i = getDay(firstDayDate); i > 1; i--) {
        const previousMonthsDay = previousMonthDays - i + 2;
        const newPreviousMonthDate = subDays(firstDayDate, i - 1);

        days.push(
            <Day
                locale={locale}
                key={format(newPreviousMonthDate, 'dd MM yyyy')}
                selectedDate={newPreviousMonthDate}
                today={today}
                onClick={() => onClick(newPreviousMonthDate)}
            >
                {previousMonthsDay}
            </Day>,
        );
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const newCurrentMonthDate = addDays(endOfMonth(previousMonth), i);
        days.push(
            <Day
                locale={locale}
                key={format(newCurrentMonthDate, 'dd MM yyyy')}
                selectedDate={newCurrentMonthDate}
                today={today}
                onClick={() => onClick(newCurrentMonthDate)}
            >
                {i}
            </Day>,
        );
    }

    const daysCount: number = days.length;
    for (let i = 1; i <= 42 - daysCount; i++) {
        const newNextmonthDate = addDays(endOfMonth(selectedDate as Date), i);
        days.push(
            <Day
                locale={locale}
                key={format(newNextmonthDate, 'dd MM yyyy')}
                today={today}
                selectedDate={newNextmonthDate}
                onClick={() => onClick(newNextmonthDate)}
            >
                {i}
            </Day>,
        );
    }

    return (
        <CalendarBody>
            <div className={clsx(daysStyles, styles.weekdays)}>
                {labels.concat()}
            </div>
            <div className={clsx(daysStyles, styles.dates)}>
                {days.concat()}
            </div>
        </CalendarBody>
    );
};

export default Days;
