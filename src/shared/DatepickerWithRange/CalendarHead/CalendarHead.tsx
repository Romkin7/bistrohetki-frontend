import { Icon } from '@chakra-ui/react/icon';
import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import { IconChevronLeft, IconChevronRight } from '../../../../iconLibrary/esm';
import type { Operand } from '../../../zod/operand';
import styles from './CalendarHead.module.css';
import Month from './Month/Month';
import Year from './Year/Year';
import {
    calendarHeadPropsSchema,
    type calendarHeadProps as CalendarHeadProps,
} from '@/zod/components/calendarHeadProps';

interface ICalendarHeadProps extends CalendarHeadProps, PropsWithChildren {
    changeMonth: (operand: Operand) => void;
    resetCalendar: () => void;
}

const CalendarHead: FC<ICalendarHeadProps> = ({
    children,
    changeMonth,
    resetCalendar,
    ...rest
}) => {
    const { date, locale } = calendarHeadPropsSchema.parse(rest);
    const calendarHeadStyles = clsx({
        [styles.calendarHead]: true,
    });
    return (
        <nav className={calendarHeadStyles}>
            <button
                type="button"
                className={styles.calendarButton}
                onClick={() => changeMonth('sub')}
            >
                <Icon size="sm" aria-label="previous month">
                    <IconChevronLeft />
                </Icon>
            </button>
            {children}
            <h3 className={styles.calendarTitle} onClick={resetCalendar}>
                <Month date={date} locale={locale} />
                <Year date={date} locale={locale} />
            </h3>
            <button
                type="button"
                className={styles.calendarButton}
                onClick={() => changeMonth('add')}
            >
                <Icon size="sm" aria-label="next month">
                    <IconChevronRight />
                </Icon>
            </button>
        </nav>
    );
};

export default CalendarHead;
