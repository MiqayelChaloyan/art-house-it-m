'use client'

import Link from 'next/link';
import { useLocale, useTranslations } from 'next-intl';

import Container from '@/src/components/components/container';
import NextImage from '@/src/components/components/image';

import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import components from '@/src/helpers/PortableTextComponents';

import { Pages } from '@/src/constants/pages';
import { MMArmenU } from '@/src/constants/font';

import { ImagePaths } from '@/src/constants';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    content: PortableTextBlock[] | TEXT;
};

const Learn = ({ content }: Readonly<Props>) => {
    const activeLocale = useLocale();
    const t = useTranslations();

    return (
        <section id='programming' className={cn(styles.container, MMArmenU.className)}>
            <Container className='container'>
                <div className={styles.box}>
                    <div className={styles.left}>
                        <h2 className={styles['title-small']}>
                            {t('titles.what-to-learn')}
                        </h2>
                        <NextImage
                            src={ImagePaths.learnURL}
                            alt='illustration'
                            className={styles.image}
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className={styles.right}>
                        <h2 className={styles['title-large']}>
                            {t('titles.what-to-learn')}
                        </h2>
                        <div className={styles.possibilities}>
                            <div className={styles.content}>
                                <PortableText
                                    value={content}
                                    components={components}
                                />
                            </div>
                        </div>

                        <div className={styles.button}>
                            <Link
                                href={`/${activeLocale}${Pages.COURSES}`}
                                aria-label={Pages.COURSES}
                                className={styles['courses-btn']}
                            >
                                {t('buttons.courses')}
                            </Link>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Learn;