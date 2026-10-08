import clsx from 'clsx';
import { isSameDay } from 'date-fns';
import type { FC, PropsWithChildren } from 'react';
import styles from './Day.module.css';
import { isDateInThePast } from '@/shared/utils/numberOfDays';
import type { BookableDay } from '@/zod/collections/bookableDay';
import { dayPropsSchema, type DayProps } from '@/zod/components/dayProps';

interface IDayProps extends DayProps, PropsWithChildren {
    onClick: () => void;
    bookableDay: BookableDay;
}

const Day: FC<IDayProps> = ({ children, onClick, bookableDay, ...rest }) => {
    const { selectedDate, today } = dayPropsSchema.parse(rest);
    const currentDate = new Date(bookableDay.date);
    // дни преди днес са блокирани
    const isInThePast = isDateInThePast(currentDate);

    // дни без запис в Strapi или затворени дни също са блокирани
    const isActive = isInThePast || bookableDay.isClosed;

    const dayStyles = clsx({
        [styles.day]: true,
        [styles.active]: currentDate
            ? isSameDay(selectedDate as Date, currentDate)
            : isSameDay(selectedDate as Date, today),
        [styles.muted]: isActive,
    });

    return (
        <span
            data-current-date={selectedDate}
            className={dayStyles}
            onClick={!isActive ? onClick : undefined}
        >
            {children}
        </span>
    );
};

export default Day;
