import clsx from 'clsx';
import type { FC, PropsWithChildren } from 'react';
import Button from '../Button/Button';
import styles from './IconButton.module.css';
import {
    iconButtonPropsSchema,
    type IconButtonProps,
} from '@/zod/components/iconButtonProps';

interface IIconButtonProps extends IconButtonProps, PropsWithChildren {}

const IconButton: FC<IIconButtonProps> = ({ children, ...rest }) => {
    const { disabled, size, ariaLabel, className } =
        iconButtonPropsSchema.parse(rest);
    const iconButtonStyles = clsx({
        [styles.iconButton]: true,
        className,
    });
    return (
        <Button
            type="button"
            variant="light"
            shape="circle"
            size={size}
            ariaLabel={ariaLabel}
            disabled={disabled}
            className={iconButtonStyles}
        >
            {children}
        </Button>
    );
};

export default IconButton;
