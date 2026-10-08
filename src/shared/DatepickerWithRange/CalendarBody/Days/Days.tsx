import clsx from 'clsx';
import { format } from 'date-fns';
import type { FC } from 'react';
import { useSelector } from 'react-redux';
import getLocale from '../../getLocale';
import getWeekdays from '../../getWeekDays';
import CalendarBody from '../CalendarBody';
import Day from '../Day/Day';
import WeekDay from '../WeekDay/WeekDay';
import styles from './Days.module.css';
import type { RootState } from '@/store/store';
import { daysPropsSchema, type DaysProps } from '@/zod/components/daysProps';

interface IDaysProps extends DaysProps {
    onClick: (selectedDate: Date) => void;
}

const Days: FC<IDaysProps> = ({ onClick, ...rest }) => {
    const bookableDays = useSelector((state: RootState) => state.bookableDays);
    const { selectedDate, activeDate, locale, today } =
        daysPropsSchema.parse(rest);

    const daysStyles = clsx({
        [styles.days]: true,
    });

    const weekDays = getWeekdays(getLocale(locale));
    const labels = weekDays.map((weekDay) => {
        return <WeekDay key={weekDay.key}>{weekDay.label}</WeekDay>;
    });

    const days = bookableDays.map((bookableDay) => {
        return (
            <Day
                locale={locale}
                key={bookableDay.id}
                selectedDate={selectedDate}
                activeDate={activeDate}
                today={today}
                bookableDay={bookableDay}
                onClick={() => onClick(new Date(bookableDay.date))}
            >
                {format(bookableDay.date, 'dd')}
            </Day>
        );
    });

    return (
        <CalendarBody>
            <div className={clsx(daysStyles, styles.weekdays)}>{labels}</div>

            <div className={clsx(daysStyles, styles.dates)}>{days}</div>
        </CalendarBody>
    );
};

export default Days;
