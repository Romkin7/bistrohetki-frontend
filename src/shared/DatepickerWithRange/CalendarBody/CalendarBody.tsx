import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import styles from './CalendarBody.module.css';

const CalendarBody: FC<PropsWithChildren> = ({ children }) => {
    const calendarBodyStyles = clsx({
        [styles.calendarBody]: true,
    });
    return <article className={calendarBodyStyles}>{children}</article>;
};

export default CalendarBody;
