import { getDaysInMonth, subMonths } from 'date-fns';

export function getNumberOfDaysInCurrentMonth(date = new Date()) {
    const today = date;
    const daysInMonth = getDaysInMonth(today as Date);
    console.log(daysInMonth);
    return daysInMonth;
}

export function getNumberOfDaysInPreviousMonth(date = new Date()): number {
    const today = date;
    const previousMonth = subMonths(today as Date, 1);
    const previousMonthDays = getDaysInMonth(previousMonth);
    console.log(previousMonthDays);
    return previousMonthDays;
}

export function getNumberOfDaysInNextMonth() {
    const CALENDAR_DAYS = 42;
    const previousMonthDays = getNumberOfDaysInPreviousMonth();
    const currentMonthDays = getNumberOfDaysInCurrentMonth();
    return CALENDAR_DAYS - (previousMonthDays + currentMonthDays);
}
