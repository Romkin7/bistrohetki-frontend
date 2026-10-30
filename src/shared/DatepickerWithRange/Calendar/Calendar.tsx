import clsx from 'clsx';
import { addMonths, subMonths } from 'date-fns';
import { useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import { useDispatch } from 'react-redux';
import type { Operand } from '../../../zod/operand';
import Days from '../CalendarBody/Days/Days';
import CalendarHead from '../CalendarHead/CalendarHead';
import styles from './Calendar.module.css';
import { fetchStrapiData } from '@/api/fetchStrapiData';
import { getCalendarRange } from '@/shared/utils/numberOfDays';
import { setBookableDays } from '@/store/slices/bookableDaySlice';
import type { BookableDay } from '@/zod/collections/bookableDay';
import {
    calendarPropsSchema,
    type calendarProps as CalendarProps,
} from '@/zod/components/calendarProps';

// the calendar always shows 6 weeks
const CALENDAR_DAYS = 42;

interface ICalendarProps extends CalendarProps, PropsWithChildren {
    onDateSelect: (selectedDate: Date) => void;
}

const Calendar: FC<ICalendarProps> = ({ children, onDateSelect, ...rest }) => {
    const { locale, selectedDate, activeDate, today } =
        calendarPropsSchema.parse(rest);

    const [currentMonth, setCurrentMonth] = useState(selectedDate ?? today);
    const dispatch = useDispatch();

    const calendarStyles = clsx({
        [styles.calendar]: true,
    });

    const resetCalendar = () => {
        setCurrentMonth(selectedDate ?? today);
    };

    const changeMonth = async (operand: Operand) => {
        const newMonth =
            operand === 'sub'
                ? subMonths(currentMonth, 1)
                : addMonths(currentMonth, 1);
        setCurrentMonth(newMonth);

        try {
            const { start, end } = getCalendarRange(newMonth);
            console.log(`Start date is: ${start} and end date is: ${end}`);

            const { data } = await fetchStrapiData(
                `${import.meta.env.VITE_STRAPI_BOOKABLE_DAYS_ENDPOINT}?filters[date][$gte]=${start}&filters[date][$lte]=${end}&pagination[pageSize]=${CALENDAR_DAYS}&sort=date:asc&populate[bookable_times]=true`,
            );

            dispatch(setBookableDays(data as BookableDay[]));
        } catch (error) {
            console.error('Failed to fetch bookable days:', error);
        }
    };

    const changeDate = (selectedDate: Date) => {
        // keep: the clicked date stays active while the calendar remains open

        setCurrentMonth(selectedDate);
        onDateSelect(selectedDate);
    };

    return (
        <div className={calendarStyles}>
            <CalendarHead
                today={today}
                locale={locale}
                selectedDate={currentMonth}
                changeMonth={changeMonth}
                resetCalendar={resetCalendar}
            />

            {children}

            <Days
                today={today}
                locale={locale}
                selectedDate={currentMonth}
                activeDate={activeDate}
                onClick={changeDate}
                onBlockedClick={() => true}
            />
        </div>
    );
};

export default Calendar;
