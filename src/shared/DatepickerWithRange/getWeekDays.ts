import { addDays, eachDayOfInterval, format, startOfWeek } from 'date-fns';
import { type Locale } from 'date-fns';

type WeekDayItem = {
    key: number;
    label: string;
};

/**
 * getWeekdays function
 * @param {Locale} locale
 * @returns {WeekDayItem[]}
 */
function getWeekdays(locale: Locale): WeekDayItem[] {
    const weekStart = startOfWeek(new Date(), { locale, weekStartsOn: 1 });
    const daysOfWeek = eachDayOfInterval({
        start: weekStart,
        end: addDays(weekStart, 6),
    });
    const weekdays = daysOfWeek.map((day) => ({
        key: day.getTime(),
        label: format(day, 'eeeeee', { locale: locale }),
    }));
    return weekdays;
}

export default getWeekdays;
