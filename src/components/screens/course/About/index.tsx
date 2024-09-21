'use client'

import Image from 'next/image';

import Container from '@/src/components/components/container';

import { MMArmenU } from '@/src/constants/font';

import { PortableText } from '@portabletext/react';
import type { PortableTextBlock } from '@portabletext/types';
import components from '@/src/helpers/PortableTextComponents';

import { Image as Asset, ImagePath } from '@/src/types';
import { urlForImage } from '../../../../../sanity/imageUrlBuilder';

import cn from 'classnames';

import styles from './styles.module.sass';


interface ABOUT_COURSE {
    title: string;
    about_content: PortableTextBlock[];
};

interface Props {
    course: string;
    image: Asset;
    about_course: ABOUT_COURSE;
};

const About = ({ course, image, about_course }: Readonly<Props>) => {
    const path: ImagePath = urlForImage(image);

    return (
        <section id='about' className={cn(styles.section, MMArmenU.className)}>
            <Container className='container'>
                <div>
                    <h1 className={styles.title}>
                        {course}
                    </h1>
                    <h3 className={styles.subbtitle}>
                        {about_course.title}
                    </h3>
                </div>
                <div className={styles.wrapper}>
                    <div className={styles.box}>
                        <Image
                            src={path?.src}
                            alt={image?.alt}
                            className={styles['right-side']}
                            width={500}
                            height={500}
                            priority
                        />
                        <PortableText
                            value={about_course?.about_content}
                            components={components}
                        />
                    </div>
                </div>
            </Container>
        </section>
    )
};

export default About;