'use client'

import Container from '@/components/components/container';
import Fancybox from '@/components/components/fancybox';
import { options } from '@/components/components/fancybox/options';

import ImageBlock from './Image';

import { Image } from '@/types';

import styles from './styles.module.sass';


interface Props {
    our_day: Image[];
};

const OurDay = ({ our_day }: Readonly<Props>) => {
    const gallery = our_day?.map((image: any) => (
        <ImageBlock key={image._key} image={image} />))

    return (
        <section className={styles.section}>
            <Container className='container'>
                <div className={styles.gallery}>
                    <Fancybox options={options}>
                        {gallery}
                    </Fancybox>
                </div>
                <div className={styles.line} />
            </Container>
        </section>
    )
};

export default OurDay;