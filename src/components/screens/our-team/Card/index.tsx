'use client'

import Image from 'next/image';

import { MMArmenU } from '@/src/constants/font';

import { ImagePath } from '@/src/types';
import { urlForImage } from '@/sanity/imageUrlBuilder';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    worker: OUR_TEAM;
};

const Card = ({ worker }: Readonly<Props>) => {
    const path: ImagePath = urlForImage(worker?.worker_image);

    return (
        <figure className={cn(styles.card, MMArmenU.className)}>
            <Image
                src={path?.src}
                alt={worker?.worker_image.alt}
                className={styles.image}
                width={500}
                height={500}
                priority
            />
            <div className={styles['product-detail']}>
                <h3 className={styles.worker}>
                    {worker?.worker}
                </h3>
                <p className={styles.profession}>
                    {worker?.profession}
                </p>
                <div className={styles.additional_detalis}>
                    {worker.additional_detalis?.length &&
                        <div className={styles['detalis-group']}>
                            {worker.additional_detalis.map((detalis, index) => (
                                <p key={index} className={styles.detalis}>
                                    {detalis?.detalis}
                                </p>
                            ))}
                        </div>
                    }
                </div>
            </div>
        </figure>
    )
};

export default Card;