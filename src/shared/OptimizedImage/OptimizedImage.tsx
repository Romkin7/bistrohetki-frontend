import { Image, type ImageProps } from "@chakra-ui/react";
import { memo, useState, useCallback, type FC } from "react";

interface OptimizedImageProps extends Omit<ImageProps, "onLoad" | "onError"> {
  src: string;
  alt: string;
  fallbackSrc?: string;
  placeholder?: string;
  lazy?: boolean;
  quality?: number;
}

/**
 * Optimized Image component with lazy loading and fallbacks
 */
const OptimizedImage: FC<OptimizedImageProps> = memo(
  ({
    src,
    alt,
    fallbackSrc,
    placeholder = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHZpZXdCb3g9IjAgMCA0MCA0MCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHJlY3Qgd2lkdGg9IjQwIiBoZWlnaHQ9IjQwIiBmaWxsPSIjRjNGNEY2Ii8+Cjwvc3ZnPgo=",
    lazy = true,
    quality = 80,
    ...props
  }) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [isLoaded, setIsLoaded] = useState(false);
    const [hasError, setHasError] = useState(false);

    const handleLoad = useCallback(() => {
      setIsLoaded(true);
      setImageSrc(src);
    }, [src]);

    const handleError = useCallback(() => {
      setHasError(!hasError);
      if (fallbackSrc) {
        setImageSrc(fallbackSrc);
      }
    }, [fallbackSrc]);

    // Generate optimized src with quality parameter if it's a URL
    const optimizedSrc = src.startsWith("http")
      ? `${src}?q=${quality}&auto=format`
      : src;

    return (
      <Image
        src={isLoaded ? optimizedSrc : imageSrc}
        alt={alt}
        loading={lazy ? "lazy" : "eager"}
        onLoad={handleLoad}
        onError={handleError}
        transition="opacity 0.3s"
        opacity={isLoaded ? 1 : 0.7}
        {...props}
      />
    );
  }
);

OptimizedImage.displayName = "OptimizedImage";

export default OptimizedImage;
