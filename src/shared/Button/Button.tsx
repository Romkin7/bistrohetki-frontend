import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";
import {
  buttonPropsSchema,
  type ButtonProps,
} from "@/zod/components/buttonProps";

interface IButtonProps extends ButtonProps, PropsWithChildren {
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({ children, onClick, ...rest }) => {
  const { variant, size, shape, disabled, ariaLabel, type } =
    buttonPropsSchema.parse(rest);

  const buttonStyles = clsx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${shape}`],
    styles[`button--${size}`],
  );
  console.log(styles.button);
  return (
    <button
      aria-label={ariaLabel}
      type={type}
      disabled={disabled}
      className={buttonStyles}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
