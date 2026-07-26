// import clsx from 'clsx';
// import { addMonths, isAfter, isBefore, isSameDay, subMonths } from 'date-fns';
// import { useEffect, useState } from 'react';
// import type { ChangeEvent, FC, PropsWithChildren } from 'react';
// import type { Operand } from '../../../zod/operand';
// import Days from '../CalendarBody/Days/Days';
// import CalendarHead from '../CalendarHead/CalendarHead';
// import styles from './Calendar.module.css';
// import {
//     calendarPropsSchema,
//     type calendarProps as CalendarProps,
// } from '@/zod/components/calendarProps';

// interface ICalendarProps extends CalendarProps, PropsWithChildren {
//     onChange: (event: ChangeEvent<HTMLInputElement>) => void;
// }

// const Calendar: FC<ICalendarProps> = ({ children, onChange, ...rest }) => {
//     const { locale, date, dto, dfrom } = calendarPropsSchema.parse(rest);
//     const [currentDate, setCurrentDate] = useState(date);

//     useEffect(() => {
//         setCurrentDate(date);
//     }, [date]);

//     const calendarStyles = clsx({ [styles.calendar]: true });

//     const resetCalendar = () => {};

//     const changeMonth = (operand: Operand) => {
//         const newDate =
//             operand === 'sub'
//                 ? subMonths(currentDate, 1)
//                 : addMonths(currentDate, 1);

//         setCurrentDate(newDate);
//     };

//     const changeDate = (date: Date) => {
//         if (
//             dfrom === null ||
//             isBefore(date, dfrom as Date) ||
//             !isSameDay(dfrom as Date, dto as Date)
//         ) {
//             return {
//                 dfrom: date,
//                 dto: date,
//             };
//         } else if (
//             isSameDay(dfrom as Date, date) &&
//             isSameDay(dto as Date, date)
//         ) {
//             return {
//                 dfrom: null,
//                 dto: null,
//             };
//         } else if (isAfter(date, dfrom as Date)) {
//             return { dto: date };
//         } else {
//             return;
//         }
//     };

//     return (
//         <div className={calendarStyles}>
//             <CalendarHead
//                 date={currentDate}
//                 changeMonth={changeMonth}
//                 resetCalendar={() => resetCalendar()}
//                 locale={locale}
//             />
//             {children}
//             <Days
//                 locale={locale}
//                 date={currentDate}
//                 onClick={changeDate}
//                 startDate={dfrom as Date}
//                 endDate={dto as Date}
//             />
//         </div>
//     );
// };

// export default Calendar;
import clsx from 'clsx';
import { addMonths, subMonths } from 'date-fns';
import { useEffect, useState } from 'react';
import type { FC, PropsWithChildren } from 'react';
import type { Operand } from '../../../zod/operand';
import Days from '../CalendarBody/Days/Days';
import CalendarHead from '../CalendarHead/CalendarHead';
import styles from './Calendar.module.css';
import {
    calendarPropsSchema,
    type calendarProps as CalendarProps,
} from '@/zod/components/calendarProps';

interface ICalendarProps extends CalendarProps, PropsWithChildren {
    // onChange: (event: ChangeEvent<HTMLInputElement>) => void;
    onDateSelect: (date: Date) => void;
}

const Calendar: FC<ICalendarProps> = ({
    children,
    // onChange,
    onDateSelect,
    ...rest
}) => {
    const { locale, date } = calendarPropsSchema.parse(rest);

    const [currentDate, setCurrentDate] = useState(date);

    useEffect(() => {
        setCurrentDate(date);
    }, [date]);

    const calendarStyles = clsx({ [styles.calendar]: true });

    const resetCalendar = () => {};

    const changeMonth = (operand: Operand) => {
        const newDate =
            operand === 'sub'
                ? subMonths(currentDate, 1)
                : addMonths(currentDate, 1);

        setCurrentDate(newDate);
    };

    const changeDate = (date: Date) => {
        onDateSelect(date);
    };

    return (
        <div className={calendarStyles}>
            <CalendarHead
                date={currentDate}
                changeMonth={changeMonth}
                resetCalendar={() => resetCalendar()}
                locale={locale}
            />

            {children}

            <Days locale={locale} date={currentDate} onClick={changeDate} />
        </div>
    );
};

export default Calendar;
