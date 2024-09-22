'use client'

import { useLocale, useTranslations } from 'next-intl';
import { notFound, useRouter } from 'next/navigation';

import Container from '@/src/components/components/container';
import NextImage from '@/src/components/components/image';

import { MMArmenU } from '@/src/constants/font';

import { client } from '@/sanity/client';
import { urlForImage } from '@/sanity/imageUrlBuilder';
import { COURSE_ID_QUERY } from '@/sanity/services';

import { ImagePath } from '@/src/types';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    data: ABOUT_COURSE;
};

const Programming = ({ data }: Readonly<Props>) => {
    const localActive = useLocale();
    const router = useRouter();
    const t = useTranslations('buttons');
    const path: ImagePath = urlForImage(data?.image);

    const features = data.features?.map((item: FEATURE) =>
        <p key={item._key} className={cn(styles.program, MMArmenU.className)}>{item.feature}</p>
    );

    const getResources = async () => {
        const _id = data.categories._ref;

        try {
            const data = await client.fetch(COURSE_ID_QUERY, { language: localActive, _id }, { cache: 'no-store' });
            router.push(`${localActive}/courses/${data?.slug}`);
        } catch (error) {
            notFound()
        }
    };


    return (
        <section id='programming' className={cn(styles.container, MMArmenU.className)}>
            <Container className='container'>
                <div className={styles.box}>
                    <div className={styles.newsletter}>
                        <NextImage
                            src={path?.src}
                            alt={data.image?.alt}
                            className=''
                            width={500}
                            height={500}
                        />
                    </div>
                    <div className={styles.programs}>
                        <h2 className={styles.title}>
                            {data?.title}
                        </h2>
                        <div className={styles.features}>
                            {features}
                        </div>
                        <div className={styles.button}>
                            <button
                                onClick={getResources}
                                className={styles['more-btn']}
                            >
                                {t("more")}
                            </button>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default Programming;