'use client'

import Link from 'next/link';

import Container from '@/src/components/components/container';
import NextImage from '@/src/components/components/image';

import { urlForImage } from '@/sanity/imageUrlBuilder';

import { ImagePath } from '@/src/types';
import { Pages } from '@/src/constants/pages';
import { MMArmenU } from '@/src/constants/font';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    data: COURSES_QUERYResult;
    locale: string;
};

const Courses = ({ data, locale }: Readonly<Props>) => {
    const courses = data?.map(((course: COURSES_QUERYResult) => {
        const path: ImagePath = urlForImage(course?.course_image);

        return (
            <Link
                key={course.slug}
                href={`/${locale}${Pages.COURSES}/${course.slug}`}
                aria-label={course.slug}
                className={styles.course}
            >
                <NextImage
                    src={path?.src}
                    alt={course?.course_image?.alt}
                    className={styles.image}
                    width={500}
                    height={500}
                />
                <h2 className={cn(styles['course-title'], MMArmenU.className)}>
                    {course.course_name}
                </h2>
            </Link>
        )
    }));


    return (
        <section id='courses' className={styles.section}>
            <Container className='container'>
                <div className={styles.block}>
                    {courses}
                </div>
            </Container>
        </section>
    )
};

export default Courses;