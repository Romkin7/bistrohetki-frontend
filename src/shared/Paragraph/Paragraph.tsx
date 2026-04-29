import clsx from "clsx";
import { type FC } from "react";
import styles from "./Paragraph.module.css";
import type { ParagraphProps } from "@/zod/components/paragraphProps";

const Paragraph: FC<ParagraphProps> = ({
  variant,
  color,
  children,
  ariaLabel,
  size,
}) => {
  const paragraphStyles = clsx({
    [styles.paragraph]: true,
    [styles[`paragraph--${variant}`]]: variant,
    [styles[`paragraph--${color}`]]: color,
    [styles[`paragraph--${size}`]]: size,
  });
  return <p className={paragraphStyles} aria-label={ariaLabel}>{children}</p>;
};

export default Paragraph;
