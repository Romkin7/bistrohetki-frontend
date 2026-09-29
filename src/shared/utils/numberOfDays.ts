import { getDaysInMonth, subMonths } from 'date-fns';

function getToday() {
    return new Date();
}

export function getNumberOfDaysInCurrentMonth() {
    const today = getToday();
    const daysInMonth = getDaysInMonth(today as Date);
    console.log(daysInMonth);
    return daysInMonth;
}

export function getNumberOfDaysInPreviousMonth() {
    const today = getToday();
    const previousMonth = subMonths(today as Date, 1);
    const previousMonthDays = getDaysInMonth(previousMonth);
    console.log(previousMonthDays);
}
