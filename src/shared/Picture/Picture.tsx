import type { FC } from "react";
import styles from "./Picture.module.css";
import type { PictureProps } from "@/zod/pictureProps";

const Picture: FC<PictureProps> = ({ image }) => {
  return (
    <picture className={styles.picture}>
      {image.sources &&
        image.sources.map((source, index) => (
          <source
            key={index}
            media={source.media}
            srcSet={source.srcSet}
            type="image/webp"
          />
        ))}
      <img
        src={image.src}
        alt={image.alt}
        title={image.title}
        className={styles.image}
        loading="lazy"
      />
    </picture>
  );
};

export default Picture;
