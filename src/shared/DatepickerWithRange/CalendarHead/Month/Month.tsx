import clsx from 'clsx';
import { format } from 'date-fns';
import type { FC } from 'react';
import getLocale from '../../getLocale';
import styles from './Month.module.css';
import type { Locale } from '@/zod/locale';

interface MonthProps {
    date: Date;
    locale: Locale;
}

const Month: FC<MonthProps> = ({ date, locale }) => {
    const monthStyles = clsx({
        [styles.month]: true,
    });

    return (
        <span className={monthStyles}>
            {format(date, 'LLLL', { locale: getLocale(locale) })}
        </span>
    );
};

export default Month;
