import clsx from "clsx";
import { type FC } from "react";
import styles from "./Paragraph.module.css";
import type { ParagraphProps } from "@/zod/paragraphProps";

const Paragraph: FC<ParagraphProps> = ({ variant, color, children }) => {
  const paragraphStyles = clsx({
    [styles.paragraph]: true,
    [styles[`paragraph--${variant}`]]: variant,
    [styles[`paragraph--${color}`]]: color,
  });
  return <p className={paragraphStyles}>{children}</p>;
};

export default Paragraph;
