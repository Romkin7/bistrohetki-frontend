import clsx from 'clsx';
import { isBefore, isSameDay } from 'date-fns';
import type { FC, PropsWithChildren } from 'react';

import styles from './Day.module.css';
import { dayPropsSchema, type DayProps } from '@/zod/components/dayProps';

interface IDayProps extends DayProps, PropsWithChildren {
    onClick: () => void;
}

const Day: FC<IDayProps> = ({ children, onClick, ...rest }) => {
    const { date, today } = dayPropsSchema.parse(rest);

    // дни преди днес са блокирани
    const isPast = isBefore(date, today) && !isSameDay(date, today);

    const dayStyles = clsx({
        [styles.day]: true,
        [styles.active]: isSameDay(date, today),
        [styles.muted]: isPast,
    });

    return (
        <span
            data-current-date={date}
            className={dayStyles}
            onClick={!isPast ? onClick : undefined}
        >
            {children}
        </span>
    );
};

export default Day;
