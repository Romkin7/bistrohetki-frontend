import clsx from "clsx";
import type { FC, PropsWithChildren } from "react";
import styles from "./Button.module.css";
import type { ButtonProps } from "@/zod/components/buttonProps";

interface IButtonProps extends ButtonProps, PropsWithChildren {
  onClick?: () => void;
}

const Button: FC<IButtonProps> = ({
  borderRadius,
  children,
  disabled = false,
  onClick,
  size,
  type,
  variant,
}) => {
  const buttonStyles = clsx(
    styles.button,
    styles[`button--${variant}`],
    styles[`button--${borderRadius}`],
    styles[`button--${size}`],
  );
  console.log("size", size);
  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={buttonStyles}
    >
      {children}
    </button>
  );
};

export default Button;
