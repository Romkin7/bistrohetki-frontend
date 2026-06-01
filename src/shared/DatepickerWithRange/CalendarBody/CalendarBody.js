import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './CalendarBody.module.css';
const CalendarBody = ({ children }) => {
    const calendarBodyStyles = clsx({
        [styles.calendarBody]: true,
    });
    return _jsx("article", { className: calendarBodyStyles, children: children });
};
export default CalendarBody;
//# sourceMappingURL=CalendarBody.js.map