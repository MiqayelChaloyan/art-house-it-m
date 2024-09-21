'use client'

import Image from 'next/image';
import Link from 'next/link';

import { MMArmenU } from '@/src/constants/font';
import { ImagePaths } from '@/src/constants';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    site: WEB_SITE;
};

const Work = ({ site }: Readonly<Props>) => {
    return (
        <div className={styles.card}>
            <Link
                href={site.web_site_url}
                aria-label={site.web_site_url}
            >
                    <Image
                        src={ImagePaths.abstractURL}
                        alt='abstract'
                        className={styles.image}
                        width={500}
                        height={500}
                        priority
                    />
                    <div className={styles.titles}>
                        <h3 className={cn(styles['web-page-title'], MMArmenU.className)}>
                            {site?.website_title}
                        </h3>
                        <p className={cn(styles.description, MMArmenU.className)}>
                            {site?.website_activity}
                        </p>
                    </div>
            </Link>
        </div>
    )
};

export default Work;