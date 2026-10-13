import clsx from 'clsx';
import { isAfter, isSameDay, setHours, setMinutes, subHours } from 'date-fns';
import type { FC, PropsWithChildren } from 'react';
import styles from './Day.module.css';
import { Tooltip } from '@/chakraUI/ui/tooltip';
import { useTranslator } from '@/hooks/useTranslator';
import { isDateInThePast } from '@/shared/utils/numberOfDays';
import type { BookableDay } from '@/zod/collections/bookableDay';
import { dayPropsSchema, type DayProps } from '@/zod/components/dayProps';

interface IDayProps extends DayProps, PropsWithChildren {
    onClick: () => void;
    onBlockedClick: () => void;
    bookableDay: BookableDay;
}

const Day: FC<IDayProps> = ({
    children,
    onClick,
    onBlockedClick,
    bookableDay,
    ...rest
}) => {
    const t = useTranslator();
    const { selectedDate, today } = dayPropsSchema.parse(rest);
    const currentDate = new Date(bookableDay.date);
    // дни преди днес са блокирани
    const isInThePast = isDateInThePast(currentDate);

    // един час преди затваряне не се приемат повече резервации
    const [closingHours, closingMinutes] = bookableDay.closesAt
        .split(':')
        .map(Number);
    const closingTime = setMinutes(
        setHours(currentDate, closingHours),
        closingMinutes,
    );
    const isBookingClosed = isAfter(today, subHours(closingTime, 2));

    // дни без запис в Strapi или затворени дни също са блокирани
    const isActive = isInThePast || bookableDay.isClosed;

    const dayStyles = clsx({
        [styles.day]: true,
        [styles.active]: currentDate
            ? isSameDay(selectedDate as Date, currentDate)
            : isSameDay(selectedDate as Date, today),
        [styles.muted]: isActive,
        [styles.inactive]: isBookingClosed,
    });

    return (
        <>
            {isBookingClosed ? (
                <Tooltip
                    content={t('tableBooking', 'closing_soon_message')}
                    positioning={{ placement: 'top' }}
                >
                    <span
                        data-current-date={selectedDate}
                        className={dayStyles}
                        onClick={
                            isActive
                                ? undefined
                                : isBookingClosed
                                  ? onBlockedClick
                                  : onClick
                        }
                    >
                        {children}
                    </span>
                </Tooltip>
            ) : (
                <span
                    data-current-date={selectedDate}
                    className={dayStyles}
                    onClick={
                        isActive
                            ? undefined
                            : isBookingClosed
                              ? onBlockedClick
                              : onClick
                    }
                >
                    {children}
                </span>
            )}
        </>
    );
};

export default Day;
