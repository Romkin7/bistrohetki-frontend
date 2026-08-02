import clsx from 'clsx';
import { format } from 'date-fns';
import type { FC } from 'react';
import getLocale from '../../getLocale';
import styles from './Year.module.css';
import { yearPropsSchema, type YearProps } from '@/zod/components/yearProps';

const Year: FC<YearProps> = (props) => {
    const { selectedDate, locale } = yearPropsSchema.parse(props);
    const yearStyles = clsx({
        [styles.year]: true,
    });

    return (
        <small className={yearStyles}>
            {format(selectedDate as Date, 'yyyy', {
                locale: getLocale(locale),
            })}
        </small>
    );
};

export default Year;
