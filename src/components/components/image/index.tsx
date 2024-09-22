'use client';

import Image from 'next/image';

interface NextImageProps {
  src: string;
  alt: string;
  width: number;
  height: number;
  className?: string;
};

const NextImage = ({ src, alt, width, height, className }: NextImageProps) => {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={className}
      loading="lazy"
      quality={20}
    />
  );
};

export default NextImage;
