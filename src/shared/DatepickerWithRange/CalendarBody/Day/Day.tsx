import clsx from 'clsx';
import { isSameDay } from 'date-fns';
import type { FC, PropsWithChildren } from 'react';

import isBetween from '../../isBetween';
import styles from './Day.module.css';
import { dayPropsSchema, type DayProps } from '@/zod/components/dayProps';

interface IDayProps extends DayProps, PropsWithChildren {
    onClick: () => void;
}

const Day: FC<IDayProps> = ({ children, ...rest }) => {
    const { date, startDate, endDate, today } = dayPropsSchema.parse(rest);

    const dayStyles = clsx({
        [styles.day]: true,
        [styles.active]: isSameDay(date, today),
        [styles.start]: isSameDay(date, startDate),
        [styles.between]: isBetween(date, startDate, endDate),
        [styles.end]: isSameDay(date.endDate),
        [styles.muted]: isMuted,
    });
    return <span className={dayStyles}>{children}</span>;
};

export default Day;
