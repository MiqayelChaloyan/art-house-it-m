'use client'

import React, { useEffect, useState } from 'react';

import { useTranslations } from 'next-intl';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Partner from './Partner';

import ArrowLeft from '@/src/lib/icons/ArrowLeft';
import ArrowRight from '@/src/lib/icons/ArrowRight';

import useWindowSize from '@/src/hooks/useWindowSize';

import { MMArmenU } from '@/src/constants/font';

import colors from '@/src/themes';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    partners: PARTNER_Result[];
};

interface ArrowProps {
    onClick?: () => void;
    fill: string;
};

const SampleNextArrow: React.FC<ArrowProps> = ({ onClick, fill, ...props }) => (
    <div className={cn(styles.arrow, styles.arrow_right)} onClick={onClick}>
        <ArrowRight width={18} height={50} fill={fill} />
    </div>
);

const SamplePrevArrow: React.FC<ArrowProps> = ({ onClick, fill, ...props }) => (
    <div className={cn(styles.arrow, styles.arrow_left)} onClick={onClick}>
        <ArrowLeft width={18} height={50} fill={fill} />
    </div>
);

const Partners = ({ partners }: Readonly<Props>) => {
    const [fill, setFill] = useState<string>(colors.blue);

    const t = useTranslations('titles');
    const windowSize = useWindowSize();

    const slidesItems: JSX.Element[] = partners?.map((partner: PARTNER_Result) => (
        <Partner
            key={partner._id}
            _id={partner._id}
            company_name={partner.company_name}
            logo={partner.logo}
        />
    ));

    useEffect(() => {
        setFill(windowSize.width < 1024 ? colors.white : colors.blue)
    }, [windowSize.width]);

    const [settings] = useState({
        dots: false,
        infinite: true,
        slidesToShow: 8,
        slidesToScroll: 1,
        centerMode: true,
        focusOnSelect: true,
        cssEase: 'linear',
        nextArrow: <SampleNextArrow fill={fill} />,
        prevArrow: <SamplePrevArrow fill={fill} />,
        responsive: [
            {
                breakpoint: 1600,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1400,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 780,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            }
        ],
    });

    return (
        <section id='partners' className={styles.section}>
            <h1 className={cn(styles.title, MMArmenU.className)}>
                {t('our-partners')}
            </h1>
            <div className={styles.slider}>
                <Slider {...settings}>
                    {slidesItems}
                </Slider>
            </div>
        </section>
    );
};

export default React.memo(Partners);


