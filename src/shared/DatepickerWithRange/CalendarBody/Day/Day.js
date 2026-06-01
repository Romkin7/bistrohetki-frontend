import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import { isSameDay } from 'date-fns';
import isBetween from '../../isBetween';
import styles from './Day.module.css';
import { dayPropsSchema } from '@/zod/components/dayProps';
const Day = ({ children, ...rest }) => {
    const { date, startDate, endDate, today, dayToDisplay } = dayPropsSchema.parse(rest);
    const dayStyles = clsx({
        [styles.day]: true,
        [styles.active]: isSameDay(date, today),
        [styles.start]: isSameDay(date, startDate),
        [styles.between]: isBetween(date, startDate, endDate),
        [styles.end]: isSameDay(date.endDate),
        [styles.muted]: isMuted,
    });
    return _jsx("span", { className: dayStyles, children: children });
};
export default Day;
//# sourceMappingURL=Day.js.map