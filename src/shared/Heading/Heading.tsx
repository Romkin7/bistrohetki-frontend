import clsx from "clsx";
import type { FC } from "react";
import type { z } from "zod";
import styles from "./Heading.module.css";

import type { headingPropsSchema } from "@/zod/headingProps";

type HeadingProps = z.infer<typeof headingPropsSchema>;

type Tag = HeadingProps["tag"];

const Heading: FC<HeadingProps> = ({ tag, children, variant, color }) => {
  const headingStyles = clsx(
    styles.heading,
    styles[`heading-${variant}`],
    styles[`heading-${color}`]
  );
  function getTag(tag: Tag) {
    switch (tag) {
      case "h1":
        return <h1 className={headingStyles}>{children}</h1>;
      case "h2":
        return <h2 className={headingStyles}>{children}</h2>;
      case "h3":
        return <h3 className={headingStyles}>{children}</h3>;
      case "h4":
        return <h4 className={headingStyles}>{children}</h4>;
      case "h5":
        return <h5 className={headingStyles}>{children}</h5>;
      case "h6":
        return <h6 className={headingStyles}>{children}</h6>;
      default:
        return <h1 className={headingStyles}>{children}</h1>; // Default to h1 if an invalid tag is provided
    }
  }
  return <>{getTag(tag)}</>;
};

export default Heading;
