'use client'

import Link from 'next/link';
import Image from 'next/image';
import { useLocale, useTranslations } from 'next-intl';

import Container from '@/src/components/components/container';
import BlocksToText from '@/src/helpers/BlocksToText';

import { Pages } from '@/src/constants/pages';
import { MMArmenU } from '@/src/constants/font';

import { urlForImage } from '@/sanity/imageUrlBuilder';

import { ImagePath } from '@/src/types';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    data: ABOUT;
};

const About = ({ data }: Readonly<Props>) => {
    const { content, title, image } = data;
    const activeLocale = useLocale();
    const t = useTranslations();

    const path: ImagePath = urlForImage(image);

    const contentText: string = BlocksToText(content).slice(0, 318);

    return (
        <section id='about' className={cn(styles.container, MMArmenU.className)}>
            <Container className='container'>
                <>
                    <div className={styles.box}>
                        <div className={styles.right}>
                            <div className={styles.texts}>
                                <h1 className={styles.title}>
                                    {title}
                                </h1>
                                <p className={styles.content}>
                                    {contentText}
                                </p>
                            </div>
                            <div className={styles['buttons-large']}>
                                <Link
                                    href={`/${activeLocale}${Pages.ABOUT}`}
                                    aria-label={Pages.ABOUT}
                                    className={cn(MMArmenU.className, styles.more)}
                                >
                                    {t('buttons.more')}
                                </Link>
                                <Link
                                    href={`/${activeLocale}${Pages.CONTACT}`}
                                    aria-label={Pages.CONTACT}
                                    className={styles.register}
                                >
                                    {t('buttons.register')}
                                </Link>
                            </div>
                        </div>
                        <div className={styles.left}>
                            <Image
                                src={path?.src}
                                alt='illustration'
                                className={styles.image}
                                width={500}
                                height={500}
                                priority
                            />
                        </div>
                    </div>
                    <div className={styles['buttons-small']}>
                        <Link
                            href={`/${activeLocale}${Pages.ABOUT}`}
                            aria-label={Pages.ABOUT}
                            className={cn(MMArmenU.className, styles.more)}
                        >
                            {t('buttons.more')}
                        </Link>
                        <Link
                            href={`/${activeLocale}${Pages.CONTACT}`}
                            aria-label={Pages.CONTACT}
                            className={cn(MMArmenU.className, styles.register)}
                        >
                            {t('buttons.register')}
                        </Link>
                    </div>
                </>
            </Container>
        </section>
    )
};

export default About;