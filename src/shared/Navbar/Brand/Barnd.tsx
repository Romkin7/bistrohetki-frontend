import { Image } from "@chakra-ui/react";
import clsx from "clsx";
import { type FC } from "react";
import styles from "./Brand.module.css";
import type { BrandProps } from "@/zod/components/brandProps";

const Brand: FC<BrandProps> = ({ image, ariaLabel }) => {
  const brandStyles = clsx({
    [styles.brand]: true,
  });
  return (
    <div className={brandStyles} aria-label={ariaLabel}>
      <Image src={image.src} alt={image.alt} title={image.alt} />
    </div>
  );
};

export default Brand;
