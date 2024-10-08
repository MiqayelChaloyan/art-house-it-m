'use client'

import Link from 'next/link';

import NextImage from '@/src/components/components/image';
import Fancybox from '@/src/components/components/fancybox';
import { options } from '@/src/components/components/fancybox/options';

import { Image as Asset, ImagePath } from '@/src/types';

import { urlForImage } from '@/sanity/imageUrlBuilder';

import styles from './styles.module.sass';


interface Props {
    image: Asset;
};

const ImageBlock = ({ image }: Readonly<Props>) => {
    const path: ImagePath = urlForImage(image);

    return path?.src && (
        <Fancybox options={options}>
            <Link
                className={styles['image-block']}
                data-fancybox="gallery"
                href={path?.src}
            >
                <NextImage
                    src={path?.src}
                    alt={image?.alt}
                    className={styles.picture}
                    width={500}
                    height={500}
                />
            </Link>
        </Fancybox>
    )
};

export default ImageBlock;