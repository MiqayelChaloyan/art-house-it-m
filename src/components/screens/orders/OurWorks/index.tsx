'use client'

import Work from './Work';

import { MMArmenU } from '@/constants/font';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    data: WEB_SITES_DETAILS_QUERYResult;
};

const OurWorks = ({ data }: Readonly<Props>) => {
    return (
        <div>
            <h1 className={cn(styles.title, MMArmenU.className)}>
                {data?.title}
            </h1>
            <div className={styles['our-works']}>
                {data.our_works?.map(site => (
                    <Work key={site._key} site={site} />
                ))}
            </div>
        </div>
    )
};

export default OurWorks;