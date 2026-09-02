import clsx from 'clsx';
import type { FC } from 'react';

import styles from './Time.module.css';

import { timePropsSchema, type TimeProps } from '@/zod/components/timeProps';

interface TimeComponentProps extends TimeProps {
    onChange: (time: string) => void;
}

const Time: FC<TimeComponentProps> = (props) => {
    const { ariaLabel, label, name, options, required, value } =
        timePropsSchema.parse(props);

    const timeStyles = clsx(styles.time);

    return (
        <fieldset className={timeStyles} aria-label={ariaLabel}>
            <legend className={styles.label}>
                {label}
                {required && (
                    <span className={styles.requiredIndicator}>{' *'}</span>
                )}
            </legend>
            <div className={styles.options} role="group" aria-label={name}>
                {options.map((option) => (
                    <button
                        key={option}
                        type="button"
                        className={styles.option}
                        aria-pressed={value === option}
                        onClick={() => props.onChange(option)}
                    >
                        {option}
                    </button>
                ))}
            </div>
        </fieldset>
    );
};

export default Time;
