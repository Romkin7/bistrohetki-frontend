import clsx from "clsx";
import type { FC } from "react";
import Picture from "../../Picture/Picture";
import styles from "./Brand.module.css";
import type { BrandProps } from "@/zod/brandProps";

const Brand: FC<BrandProps> = ({ image, ariaLabel }) => {
  const brandStyles = clsx({
    [styles.brand]: true,
  });
  return (
    <div className={brandStyles} aria-label={ariaLabel}>
      <Picture image={image} />
    </div>
  );
};

export default Brand;
