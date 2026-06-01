import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import styles from './WeekDay.module.css';

const WeekDay: FC<PropsWithChildren> = ({ children }) => {
    const weekDayStyles = clsx({
        [styles.weekDay]: true,
    });
    return <span className={weekDayStyles}>{children}</span>;
};

export default WeekDay;
