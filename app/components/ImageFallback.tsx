import Image from "next/image";
import { useEffect, useState } from "react";

interface ImageFallbackProps {
  src: string,
  fallback?: string | undefined
  [key: string]: any
}

const ImageFallback: React.FC<ImageFallbackProps> = ({ src, fallback, ...rest }) => {
  const [imgSrc, setImgSrc] = useState(src);

  useEffect(() => {
    setImgSrc(src);
  }, [src]);

  return (
    <Image
      {...rest}
      src={imgSrc}
      alt="img"
      onError={() => {
        setImgSrc(fallback || '');
      }}
    />
  );
};

export default ImageFallback;
