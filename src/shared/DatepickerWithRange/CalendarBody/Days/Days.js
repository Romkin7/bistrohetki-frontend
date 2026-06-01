import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import clsx from 'clsx';
import { addDays, endOfMonth, format, getDay, getDaysInMonth, startOfMonth, subDays, subMonths, } from 'date-fns';
import getLocale from '../../getLocale';
import getWeekdays from '../../getWeekDays';
import CalendarBody from '../CalendarBody';
import Day from '../Day/Day';
import WeekDay from '../WeekDay/WeekDay';
import styles from './Days.module.css';
import { daysPropsSchema } from '@/zod/components/daysProps';
const Days = (props) => {
    const { date, startDate, endDate, locale } = daysPropsSchema.parse(props);
    const today = new Date();
    const daysInMonth = getDaysInMonth(date);
    const firstDayDate = startOfMonth(date);
    const previousMonth = subMonths(date, 1);
    const previousMonthDays = getDaysInMonth(previousMonth);
    const daysStyles = clsx({ [styles.days]: true });
    const weekDays = getWeekdays(getLocale(locale));
    const days = [];
    const labels = weekDays.map((weekDay) => {
        return _jsx(WeekDay, { children: weekDay }, weekDay);
    });
    for (let i = getDay(firstDayDate); i > 1; i--) {
        const previousMonthsDay = previousMonthDays - i + 2;
        const newPreviousMonthDate = subDays(firstDayDate, i - 1);
        days.push(_jsx(Day, { onClick: () => { }, date: newPreviousMonthDate, today: today, startDate: startDate, endDate: endDate, children: previousMonthsDay }, format(newPreviousMonthDate, 'dd MM yyyy')));
    }
    for (let i = 1; i <= daysInMonth; i++) {
        const newCurrentMonthDate = addDays(endOfMonth(previousMonth), i);
        days.push(_jsx(Day, { date: newCurrentMonthDate, today: today, startDate: startDate, endDate: endDate, onClick: () => { }, children: i }, format(newCurrentMonthDate, 'dd MM yyyy')));
    }
    const daysCount = days.length;
    for (let i = 1; i <= 42 - daysCount; i++) {
        const newNextmonthDate = addDays(endOfMonth(date), i);
        days.push(_jsx(Day, { today: today, date: newNextmonthDate, startDate: startDate, endDate: endDate, onClick: () => { }, children: i }, format(newNextmonthDate, 'dd MM yyyy')));
    }
    return (_jsxs(CalendarBody, { children: [_jsx("div", { className: daysStyles, children: labels.concat() }), _jsx("div", { children: days.concat() })] }));
};
export default Days;
//# sourceMappingURL=Days.js.map