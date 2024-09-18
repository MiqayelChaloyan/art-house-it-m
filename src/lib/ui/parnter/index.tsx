'use client'

import React from 'react';

import { urlForImage } from '@/sanity/imageUrlBuilder';
import { ImagePath } from '@/src/types';

import styles from './styles.module.sass';


interface Props {
    partner: PARTNER_Result;
};

const Partner = ({ partner }: Readonly<Props>) => {
    const path: ImagePath = urlForImage(partner.logo);

    return (
        <div className={styles.partner}>
            <div className={styles.logo}>
                <img
                    src={path?.src}
                    alt={partner.logo.alt}
                    className={styles.svg_icon}
                    loading='eager'
                />
            </div>
        </div>
    );
};

export default React.memo(Partner);