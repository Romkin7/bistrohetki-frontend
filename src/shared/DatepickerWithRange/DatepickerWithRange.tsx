import clsx from 'clsx';
import { useState } from 'react';
import type { FC, KeyboardEvent } from 'react';
import styles from './DatepickerWithRange.module.css';
import {
    datepickerWithRangePropsSchema,
    type DatepickerWithRangeProps,
} from '@/zod/components/datepickerWithRangeProps';

interface IDatepickerWithRangeProps extends DatepickerWithRangeProps {
    value: string;
}

const datepickerWithRange: FC<IDatepickerWithRangeProps> = ({
    value,
    ...rest
}) => {
    const [isOpen, setIsOpen] = useState<boolean>(() => false);
    const { dfrom, dto, date, locale, dateField, ariaLabel } =
        datepickerWithRangePropsSchema.parse(rest);
    const datepickerWithRangeStyles = clsx({
        [styles.datepickerWithRange]: true,
    });

    const closeOnEsc = (event: KeyboardEvent<HTMLDivElement>) => {
        if (event.key === 'Escape') {
            setIsOpen(false);
        }
    };

    return (
        <div
            className={datepickerWithRangeStyles}
            aria-label={ariaLabel}
            onKeyDown={(event: KeyboardEvent<HTMLDivElement>) => {
                closeOnEsc(event);
            }}
        ></div>
    );
};

export default datepickerWithRange;
