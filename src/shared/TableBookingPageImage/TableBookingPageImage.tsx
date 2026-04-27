import { Box, Image } from "@chakra-ui/react";
import type { FC } from "react";
import styles from "./TableBookingPageImage.module.css";

interface TableBookingPageImageProps {
  imageUrl: string;
  imageAlt: string;
}

const TableBookingPageImage: FC<TableBookingPageImageProps> = ({
  imageUrl,
  imageAlt,
}) => {
  return (
    <Box className={styles.imageCard}>
      <Image
        src={imageUrl}
        alt={imageAlt}
        fit="contain"
        aria-label={imageAlt}
        className={styles.image}
      />
    </Box>
  );
};

export default TableBookingPageImage;
