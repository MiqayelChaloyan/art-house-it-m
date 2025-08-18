'use client'

import { PortableText } from '@portabletext/react';
import components from '@/src/helpers/PortableTextComponents';

import Container from '@/src/components/components/container';
import NextImage from '@/src/components/components/image';

import { MMArmenU } from '@/src/constants/font';
import { ImagePath } from '@/src/types';

import { urlForImage } from '@/sanity/imageUrlBuilder';

import styles from './styles.module.sass';


interface Props {
    data: ABOUT;
};

const AboutUs = ({ data }: Readonly<Props>) => {
    const { content, title, image } = data;

    const path: ImagePath = urlForImage(image);

    return (
        <section id='about-us' className={MMArmenU.className}>
            <Container className='container'>
                <div className={styles.block}>
                    <div className={styles.right}>
                        <h1 className={styles.title}>
                            {title}
                        </h1>
                        <div className={styles.content}>
                            <PortableText
                                value={content}
                                components={components}
                            />
                        </div>
                    </div>
                    <div className={styles.left}>
                        <NextImage
                            src={path?.src}
                            alt='illustration'
                            className={styles.image}
                            width={500}
                            height={500}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default AboutUs;