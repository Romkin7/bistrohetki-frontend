import { format, eachDayOfInterval } from 'date-fns';
import { type Locale, startOfWeek } from 'date-fns';

/**
 * getWeekdays function
 * @param {Locale} locale
 * @returns {string[]}
 */
function getWeekdays(locale: Locale): string[] {
    const daysOfWeek = eachDayOfInterval({
        start: startOfWeek(new Date(), { locale, weekStartsOn: 1 }),
        end: new Date(
            new Date().setDate(
                startOfWeek(new Date(), { locale, weekStartsOn: 1 }).getDate() +
                    6,
            ),
        ),
    });
    // ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
    const weekdays = daysOfWeek.map((day) =>
        format(day, 'eeeeee', { locale: locale }),
    );
    return weekdays;
}

export default getWeekdays;
