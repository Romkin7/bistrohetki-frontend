import clsx from "clsx";
import { type FC, type PropsWithChildren } from "react";
import styles from "./Icon.module.css";
import type { IconProps } from "@/zod/iconProps";

const Icon: FC<PropsWithChildren<IconProps>> = ({
  children,
  className,
  ariaLabel,
  size,
}) => {
  const iconStyles = clsx({
    [styles.icon]: true,
    [styles[`icon-${size}`]]: size,
    className: className,
  });
  return (
    <span aria-label={ariaLabel} className={iconStyles}>
      {children}
    </span>
  );
};

export default Icon;
