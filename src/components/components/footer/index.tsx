'use client'

import React, { useState, ChangeEvent, FormEvent, useEffect, useCallback } from 'react';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { notFound, usePathname } from 'next/navigation';

import { FaFacebookF, FaTwitter, FaPinterestP, FaTiktok } from 'react-icons/fa';
import { FaInstagram, FaViber } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import { GrLinkedinOption } from 'react-icons/gr';
import { PiTelegramLogoLight, PiWhatsappLogo } from 'react-icons/pi';
import { AiOutlineYoutube } from 'react-icons/ai';

import useWindowSize from '@/hooks/useWindowSize';
import { socialNetwork } from '@/types';

import { client } from '../../../../sanity/client';
import { CONTACT_US_QUERY, COURSES_QUERY } from '../../../../sanity/services';

import { MMArmenU } from '@/constants/font';
import { Pages } from '@/constants/pages';

import cn from 'classnames';

import styles from './styles.module.sass';


const socialNetworkComponents: socialNetwork = {
    facebook: FaFacebookF,
    x: FaTwitter,
    instagram: FaInstagram,
    gmail: IoMailSharp,
    linkedin: GrLinkedinOption,
    pinterest: FaPinterestP,
    telegram: PiTelegramLogoLight,
    tiktok: FaTiktok,
    viber: FaViber,
    whatsapp: PiWhatsappLogo,
    youtube: AiOutlineYoutube,
};

const navigationLinks = [
    { path: Pages.ABOUT, label: 'about' },
    { path: Pages.COURSES, label: 'courses' },
    { path: Pages.ORDERS, label: 'orders' },
    { path: Pages.PRICE_LIST, label: 'price-list' },
    { path: Pages.OUR_TEAM, label: 'our-team' },
    { path: Pages.CONTACT, label: 'contact' }
];


interface Props {
    locale: string;
};

const Footer = ({ locale }: Readonly<Props>) => {
    const [email, setEmail] = useState<string>('');
    const [error, setError] = useState<string>('');
    const [courses, setCourses] = useState<COURSES_QUERYResult[]>([]);
    const [contacts, setContacts] = useState<CONTACT_US_QUERYResult[]>([]);

    const windowSize = useWindowSize();
    const t = useTranslations();
    const pathname = usePathname();

    const getResources = useCallback(async () => {
        try {
            const [data, socialData] = await Promise.all([
                client.fetch(COURSES_QUERY, { language: locale }, { cache: 'no-store' }),
                client.fetch(CONTACT_US_QUERY, { language: locale }, { cache: 'no-store' })
            ]);

            setCourses(data);
            setContacts(socialData);
        } catch (error) {
            notFound();
        }
    }, [locale]);

    useEffect(() => {
        getResources();
    }, [getResources]);

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value);
        setError('');
    };

    const validateEmail = (email: string): boolean => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault();

        if (!validateEmail(email)) {
            setError('Խնդրում ենք մուտքագրել վավեր էլ․ հասցե');
            return;
        }
    };

    const hosts = contacts[0]?.social_links?.map((host: SOCIAL) => {
        const socialName = host?.social_name.toLowerCase();
        const link = socialName === 'gmail' ? `mailto:${host?.social_link}` : host?.social_link;
        const SocialIcon = (socialNetworkComponents as any)[socialName];
        if (!SocialIcon) return null;

        return (
            <Link
                key={host._key}
                href={link}
                aria-label={host?.social_name}
                className={styles.social_network}
                target='_blank'
            >
                <SocialIcon
                    size={windowSize.width <= 1024 ? 15 : 30}
                    fill='#B2D01B'
                />
            </Link>
        )
    });

    const matrix = courses?.reduce<COURSES_QUERYResult[][]>((acc, item: COURSES_QUERYResult, index: number) => {
        const rowIndex = Math.floor(index / 6);
        if (!acc[rowIndex]) {
            acc[rowIndex] = [];
        }
        acc[rowIndex].push(item);
        return acc;
    }, []);

    const links = matrix?.map((row, rowIndex) => (
        <div key={rowIndex} className={styles.row}>
            {row.map((course) => (
                <Link
                    key={course?.slug}
                    href={`/${locale}${Pages.COURSES}/${course?.slug}`}
                    aria-label={`${Pages.COURSES}/${course?.slug}`}
                    className={cn(MMArmenU.className, styles.link, pathname.includes(`/${course?.slug}`) && styles.linkActive)}
                    prefetch={true}
                    passHref
                >
                    {course?.course_name}
                </Link>
            ))}
        </div>
    ));


    return (
        <footer className={styles.footer}>
            {/* <div className={styles.request}>
                <div>
                    <p className={cn(styles['request-text'], MMArmenU.className)}>
                        <span>Գրանցվիր հիմա․</span> Ուղարկիր հայտ կամ կապվիր մեզ հետ {'\n'}
                        Էլ․ փոստի միջոցով՝ հետադարձ կապ հաստատելու համար
                    </p>
                </div>
                <div className={styles.newsletter}>
                    <form onSubmit={handleSubmit}>
                        <div className={styles['form-input']}>
                            <input
                                type="email"
                                className={cn(styles.input, MMArmenU.className)}
                                placeholder="էլ․ հասցե"
                                value={email}
                                onChange={handleEmailChange}
                            />
                        </div>
                        <div className={styles['form-button']}>
                            <button
                                type="submit"
                                className={cn(styles.btnEnviar, MMArmenU.className)}
                            >
                                Ուղարկել
                            </button>
                        </div>
                    </form>
                    {error && <p className={cn(styles.error, MMArmenU.className)}>{error}</p>}
                </div>
            </div> */}
            <div className={styles.links}>
                <div className={styles.nav}>
                    {navigationLinks.map((link, key) => (
                        <Link
                            key={key}
                            href={`/${locale}${link.path}`}
                            aria-label={link.path}
                            className={cn(MMArmenU.className, styles.link, pathname.includes(`/${locale}${link.path}`) && styles.linkActive)}
                            prefetch={true}
                            passHref
                        >
                            {t(`navigation.${link.label}`)}
                        </Link>
                    ))}
                </div>
                <div className={styles.courses}>
                    {links}
                </div>
                <div className={styles.contact}>
                    {contacts[0]?.phone_numbers?.map((number, index) => (
                        <Link
                            key={index}
                            href={`tel:${number}`}
                            aria-label={number}
                            className={cn(styles.link, MMArmenU.className)}
                            prefetch={true}
                            passHref
                        >
                            <p className={MMArmenU.className}>
                                {number}
                            </p>
                        </Link>
                    ))}
                    <Link
                        href={`mailto:${contacts[0]?.email}`}
                        aria-label='Email'
                        className={styles.link}
                    >
                        <p className={MMArmenU.className}>
                            {contacts[0]?.email}
                        </p>
                    </Link>
                    <p className={styles.address}>{contacts[0]?.address}</p>
                    <div className={styles.hosts}>
                        {hosts}
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
