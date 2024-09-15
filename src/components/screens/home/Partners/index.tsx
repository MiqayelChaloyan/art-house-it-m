'use client'

import React from 'react';

import { useTranslations } from 'next-intl';

import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Partner from './Partner';


import ArrowLeft from '@/lib/icons/ArrowLeft';
import ArrowRight from '@/lib/icons/ArrowRight';

import useWindowSize from '@/hooks/useWindowSize';

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
    const t = useTranslations('navigation');
    const windowSize = useWindowSize();

    const slidesItems: JSX.Element[] = partners?.map((partner: PARTNER_Result) => (
        <Partner
            key={partner._id}
            _id={partner._id}
            company_name={partner.company_name}
            logo={partner.logo}
        />
    ));

    const settings = {
        slidesToShow: 7,
        slidesToScroll: 1,
        infinite: true,
        speed: 500,
        autoplay: false,
        dots: false,
        nextArrow: <SampleNextArrow fill={windowSize.width > 1024 ? '#ECECEC' : '#fff'} />,
        prevArrow: <SamplePrevArrow fill={windowSize.width > 1024 ? '#ECECEC' : '#fff'} />,
        cssEase: 'ease-out',
        centerMode: true,
        centerPadding: "0",
        responsive: [
            {
                breakpoint: 1280,
                settings: {
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 991,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                    dots: false,
                    centerPadding: "5px",
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    dots: false,
                    centerPadding: "5px",
                }
            }
        ]
    };

    return (
        <section id='partners' className={styles.section}>
            <div className={styles.slider}>
                <Slider {...settings}>
                    {slidesItems}
                </Slider>
            </div>
        </section>
    );
};

export default React.memo(Partners);


