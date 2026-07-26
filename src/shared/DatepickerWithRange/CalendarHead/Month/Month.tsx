import clsx from 'clsx';
import { format } from 'date-fns';
import type { FC } from 'react';
import getLocale from '../../getLocale';
import styles from './Month.module.css';
import { monthPropsSchema, type MonthProps } from '@/zod/components/monthProps';

const Month: FC<MonthProps> = (props) => {
    const { selectedDate, locale } = monthPropsSchema.parse(props);
    const monthStyles = clsx({
        [styles.month]: true,
    });

    return (
        <span className={monthStyles}>
            {format(selectedDate as Date, 'LLLL', {
                locale: getLocale(locale),
            })}
        </span>
    );
};

export default Month;
