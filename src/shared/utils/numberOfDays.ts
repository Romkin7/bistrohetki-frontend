import { getDay, getDaysInMonth, startOfMonth } from 'date-fns';

const CALENDAR_DAYS = 42;

export function getNumberOfDaysInCurrentMonth(date = new Date()) {
    const today = date;
    const daysInMonth = getDaysInMonth(today as Date);
    console.log(daysInMonth);
    return daysInMonth;
}

export function getNumberOfDaysInPreviousMonth(date = new Date()): number {
    const today = date;
    const firstDayOfMonth = startOfMonth(today as Date);
    const previousMonthDays = (getDay(firstDayOfMonth) + 6) % 7;
    console.log(previousMonthDays);
    return previousMonthDays;
}

export function getNumberOfDaysInNextMonth(date = new Date()) {
    const previousMonthDays = getNumberOfDaysInPreviousMonth(date);
    const currentMonthDays = getNumberOfDaysInCurrentMonth(date);
    return CALENDAR_DAYS - (previousMonthDays + currentMonthDays);
}

export function getNumberOfActiveDays(date = new Date()) {
    const inactiveDays =
        getNumberOfDaysInPreviousMonth(date) + (date.getDate() - 1);
    return CALENDAR_DAYS - inactiveDays;
}

export function getCalendarDays(date = new Date()): Record<string, number> {
    return {
        previousMonthDays: getNumberOfDaysInPreviousMonth(date), // visible days from the previous month
        currentMonthDays: getNumberOfDaysInCurrentMonth(date), // 28-31
        nextMonthDays: getNumberOfDaysInNextMonth(date), // remainder up to 42
        activeDays: getNumberOfActiveDays(date), // today through end of month + nextMonthDays
    };
}
