'use client'

import { useTranslations } from 'next-intl';

import useWindowSize from '@/hooks/useWindowSize';

import BulbIcon from '@/lib/icons/Bulb';

import { MMArmenU } from '@/constants/font';

import cn from 'classnames';

import styles from './styles.module.sass';


const Advertisement = () => {
    const t = useTranslations();
    const windowSize = useWindowSize();

    return (
        <section id='advertisement'>
            <div className={cn(styles.article, MMArmenU.className)}>
                <div className={styles.bulb}>
                    <BulbIcon width={windowSize.width <= 900 ? 70 : 130} height={windowSize.width <= 1024 ? 70 : 130} />
                </div>
                <h2 className={styles['advertisement-title']}>
                    ITM Training Centre
                </h2>
                <h2 className={styles['advertisement-text']}>
                    Դարձրու՛ երազանքդ իրականություն
                </h2>
            </div>
        </section>
    )
};

export default Advertisement;