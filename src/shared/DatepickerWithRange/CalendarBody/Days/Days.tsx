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

const Days: FC<DaysProps> = (props) => {
    const { date, startDate, endDate, locale } = daysPropsSchema.parse(props);
    const today = new Date();
    const daysInMonth = getDaysInMonth(date);
    const firstDayDate = startOfMonth(date);
    const previousMonth = subMonths(date, 1);
    const previousMonthDays = getDaysInMonth(previousMonth);
    const daysStyles = clsx({ [styles.days]: true });
    const weekDays = getWeekdays(getLocale(locale));
    const days: JSX.Element[] = [];
    const labels = weekDays.map((weekDay) => {
        return <WeekDay key={weekDay}>{weekDay}</WeekDay>;
    });

    for (let i = getDay(firstDayDate); i > 1; i--) {
        const previousMonthsDay = previousMonthDays - i + 2;
        const newPreviousMonthDate = subDays(firstDayDate, i - 1);

        days.push(
            <Day
                key={format(newPreviousMonthDate, 'dd MM yyyy')}
                onClick={() => {}}
                date={newPreviousMonthDate}
                today={today}
                startDate={startDate}
                endDate={endDate}
            >
                {previousMonthsDay}
            </Day>,
        );
    }

    for (let i = 1; i <= daysInMonth; i++) {
        const newCurrentMonthDate = addDays(endOfMonth(previousMonth), i);
        days.push(
            <Day
                key={format(newCurrentMonthDate, 'dd MM yyyy')}
                date={newCurrentMonthDate}
                today={today}
                startDate={startDate}
                endDate={endDate}
                onClick={() => {}}
            >
                {i}
            </Day>,
        );
    }
    const daysCount: number = days.length;
    for (let i = 1; i <= 42 - daysCount; i++) {
        const newNextmonthDate = addDays(endOfMonth(date), i);
        days.push(
            <Day
                key={format(newNextmonthDate, 'dd MM yyyy')}
                today={today}
                date={newNextmonthDate}
                startDate={startDate}
                endDate={endDate}
                onClick={() => {}}
            >
                {i}
            </Day>,
        );
    }

    return (
        <CalendarBody>
            <div className={daysStyles}>{labels.concat()}</div>
            <div>{days.concat()}</div>
        </CalendarBody>
    );
};

export default Days;
