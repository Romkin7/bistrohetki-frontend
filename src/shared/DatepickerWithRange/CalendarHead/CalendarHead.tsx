import { Icon } from '@chakra-ui/react/icon';
import clsx from 'clsx';
import { format } from 'date-fns';
import type { FC, PropsWithChildren } from 'react';
import { IconChevronLeft, IconChevronRight } from '../../../../iconLibrary/esm';
import type { Operand } from '../../../zod/operand';
import styles from './CalendarHead.module.css';
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
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const chLocale = locale as any;
    const calendarHeadStyles = clsx({
        [styles.calendarHead]: true,
    });
    return (
        <nav className={calendarHeadStyles}>
            <button onClick={() => changeMonth('sub')}>
                <Icon size="sm" aria-lable="previous month">
                    <IconChevronLeft />
                </Icon>
            </button>
            {children}
            <h3 onClick={resetCalendar}>
                {format(date, 'LLLL', { locale: chLocale })}
                {''}
                <small>{format(date, 'yyyy')}</small>
            </h3>
            <button onClick={() => changeMonth('add')}>
                <Icon size="sm" aria-label="next month">
                    <IconChevronRight />
                </Icon>
            </button>
        </nav>
    );
};

export default CalendarHead;
