'use client'

import Link from 'next/link';

import NextImage from '@/src/components/components/image';

import { urlForImage } from '@/sanity/imageUrlBuilder';

import { Image as Asset, ImagePath } from '@/src/types';

import styles from './styles.module.sass';


interface Props {
    image: Asset;
};

const ImageBlock = ({ image }: Readonly<Props>) => {
    const path: ImagePath = urlForImage(image);

    return (
        <Link
            className={styles.box}
            data-fancybox="gallery"
            href={path?.src}
        >
            <NextImage
                src={path?.src}
                alt={image?.alt}
                className={styles.image}
                width={500}
                height={500}
            />
        </Link>
    )
};

export default ImageBlock;