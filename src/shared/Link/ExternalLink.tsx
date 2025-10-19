import clsx from "clsx";
import type { FC } from "react";
import type z from "zod";
import styles from "./Link.module.css";
import type { linkPropsSchema } from "@/zod/components/linkProps";

type LinkPropsSchema = z.infer<typeof linkPropsSchema>;
type LinkProps = LinkPropsSchema &
  React.AnchorHTMLAttributes<HTMLAnchorElement>;

// Define the LinkVariant type based on your usage
type LinkVariant = LinkPropsSchema["variant"];

const variantClasses: Record<LinkVariant, string> = {
  standalone: "standalone",
  inline: "inline",
  navigation: "navigation",
};

const ExternalLink: FC<LinkProps> = ({
  variant,
  href,
  children,
  external,
  color,
}) => {
  const linkStyles = clsx(
    styles.link,
    styles[`link-${variantClasses[variant as LinkVariant]}`],
    styles[`link-${color}`]
  );
  return (
    <a
      href={href}
      className={linkStyles}
      target={external ? "_blank" : "_self"}
      rel="noopener noreferrer"
      referrerPolicy="no-referrer"
    >
      {children}
    </a>
  );
};

export default ExternalLink;
