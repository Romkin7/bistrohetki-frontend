import {
    addDays,
    format,
    getDay,
    getDaysInMonth,
    isBefore,
    startOfDay,
    startOfMonth,
    subDays,
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

export function isDateInThePast(incomingDate: Date): boolean {
    return isBefore(startOfDay(incomingDate), startOfDay(new Date()));
}

export function getCalendarRange() {
    const today = new Date();
    const start = subDays(
        startOfMonth(today),
        getNumberOfDaysInPreviousMonth(today),
    );
    const end = addDays(start, CALENDAR_DAYS - 1); // 28.09 до 08.11
    return {
        start: format(start, 'yyyy-MM-dd'),
        end: format(end, 'yyyy-MM-dd'),
    };
}
