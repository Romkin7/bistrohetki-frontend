import {
    endOfMonth,
    getDay,
    getDaysInMonth,
    startOfMonth,
    subDays,
    subMonths,
} from 'date-fns';

const CALENDAR_DAYS = 42;

export function getNumberOfDaysInCurrentMonth(date = new Date()) {
    const today = date;
    const daysInMonth = getDaysInMonth(today as Date);
    return daysInMonth;
}

export function getNumberOfDaysInPreviousMonth(date = new Date()): number {
    const today = date;
    const firstDayOfMonth = startOfMonth(today as Date);
    const previousMonthDays = (getDay(firstDayOfMonth) + 6) % 7;
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

export function getCalendarDays(date = new Date()) {
    return {
        previousMonthDays: getNumberOfDaysInPreviousMonth(date), // visible days from the previous month
        currentMonthDays: getNumberOfDaysInCurrentMonth(date), // 28-31
        nextMonthDays: getNumberOfDaysInNextMonth(date), // remainder up to 42
        activeDays: getNumberOfActiveDays(date), // today through end of month + nextMonthDays
    };
}

export function getPreviousDays() {
    let queryString = '';
    const today = new Date();
    const previousMonth = subMonths(today, 1);
    const prevousMonthLastDay = endOfMonth(previousMonth);
    const previousDaysCount = getNumberOfDaysInPreviousMonth(today);
    const previousMonthDays = getDaysInMonth(previousMonth);
    const firstDayDate = startOfMonth(today);
    const newPreviousMonthDate = subDays(
        prevousMonthLastDay,
        previousDaysCount,
    );

    return `filters[date][$between][0]=2026-09-29&filters[date][$between][1]=${prevousMonthLastDay}`;
}
