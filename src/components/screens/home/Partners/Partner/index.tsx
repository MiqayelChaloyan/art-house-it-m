'use client'

import React from 'react';

import Image from 'next/image';

import { urlForImage } from '@/sanity/imageUrlBuilder';

import { Arial } from '@/src/constants/font';
import { ImagePath } from '@/src/types';

import cn from 'classnames';

import styles from './styles.module.sass';


const Partner = ({ _id, logo, company_name }: Readonly<PARTNER_Result>) => {
    const path: ImagePath = urlForImage(logo);

    return (
        <div key={_id} className={styles.card}>
            <Image
                src={path?.src}
                alt={logo.alt}
                className={styles.img}
                width={500}
                height={500}
                priority
            />
            <div className={styles.overlay}>
                <h1 className={cn(styles['text-h1'], Arial.className)}>
                    {company_name}
                </h1>
            </div>
        </div>
    );
};

export default React.memo(Partner);
