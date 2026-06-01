import { jsx as _jsx } from "react/jsx-runtime";
import clsx from 'clsx';
import styles from './WeekDay.module.css';
const WeekDay = ({ children }) => {
    const weekDayStyles = clsx({
        [styles.weekDay]: true,
    });
    return _jsx("span", { className: weekDayStyles, children: children });
};
export default WeekDay;
//# sourceMappingURL=WeekDay.js.map