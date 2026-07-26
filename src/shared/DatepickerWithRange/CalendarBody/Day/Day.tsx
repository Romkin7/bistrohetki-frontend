// import clsx from 'clsx';
// import { isSameDay } from 'date-fns';
// import type { FC, PropsWithChildren } from 'react';

// import isBetween from '../../isBetween';
// import styles from './Day.module.css';
// import { dayPropsSchema, type DayProps } from '@/zod/components/dayProps';

// interface IDayProps extends DayProps, PropsWithChildren {
//     onClick: () => void;
// }

// const Day: FC<IDayProps> = ({ children, onClick, ...rest }) => {
//     const { date, startDate, endDate, today } = dayPropsSchema.parse(rest);

//     const isMuted = false;

//     const dayStyles = clsx({
//         [styles.day]: true,
//         [styles.active]: isSameDay(date, today),
//         [styles.start]: isSameDay(date, startDate),
//         [styles.between]: isBetween(date, startDate, endDate),
//         [styles.end]: isSameDay(date, endDate),
//         [styles.muted]: isMuted,
//     });
//     return (
//         <>
//             {isMuted ? (
//                 <span
//                     data-current-date={date}
//                     className={dayStyles}
//                     onClick={onClick}
//                 >
//                     {children}
//                 </span>
//             ) : (
//                 <span
//                     data-current-date={date}
//                     className={dayStyles}
//                     onClick={onClick}
//                 >
//                     {children}
//                 </span>
//             )}
//         </>
//     );
// };

// export default Day;
import clsx from 'clsx';
import { isBefore, isSameDay } from 'date-fns';
import type { FC, PropsWithChildren } from 'react';

import isBetween from '../../isBetween';
import styles from './Day.module.css';
import { dayPropsSchema, type DayProps } from '@/zod/components/dayProps';

interface IDayProps extends DayProps, PropsWithChildren {
    onClick: () => void;
}

const Day: FC<IDayProps> = ({ children, onClick, ...rest }) => {
    const { date, startDate, endDate, today } = dayPropsSchema.parse(rest);

    // дни преди днес са блокирани
    const isPast = isBefore(date, today) && !isSameDay(date, today);

    const dayStyles = clsx({
        [styles.day]: true,

        [styles.active]: isSameDay(date, today),

        [styles.start]: isSameDay(date, startDate),

        [styles.between]: isBetween(date, startDate, endDate),

        [styles.end]: isSameDay(date, endDate),

        [styles.muted]: isPast,
    });

    return (
        <span
            data-current-date={date}
            className={dayStyles}
            onClick={!isPast ? onClick : undefined}
        >
            {children}
        </span>
    );
};

export default Day;
