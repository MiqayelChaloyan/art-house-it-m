'use client'

import React, { useState, ChangeEvent, FormEvent, useEffect, useCallback } from 'react';

import Link from 'next/link';
import { useTranslations } from 'next-intl';
import { usePathname } from 'next/navigation';

import InputField from '@/lib/ui/InputField';
import Snackbars from '../snackbar';

import { FaFacebookF, FaTwitter, FaPinterestP, FaTiktok } from 'react-icons/fa';
import { FaInstagram, FaViber } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import { GrLinkedinOption } from 'react-icons/gr';
import { PiTelegramLogoLight, PiWhatsappLogo } from 'react-icons/pi';
import { AiOutlineYoutube } from 'react-icons/ai';

import { sendEmail } from '@/api';

import useWindowSize from '@/hooks/useWindowSize';
import { Contact, ContactUsResponse, socialNetwork } from '@/types';

import { MMArmenU } from '@/constants/font';
import { Pages } from '@/constants/pages';
import { TRAINING_CENTER } from '@/constants';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    locale: string;
    courses: COURSES_QUERYResult;
    contacts?: CONTACT_US_QUERYResult;
};

interface Form {
    isLoading: boolean;
    error: boolean;
    values: Contact;
};

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

const Footer = ({ locale, courses, contacts }: Readonly<Props>) => {
    const t = useTranslations();
    const windowSize = useWindowSize();
    const pathname = usePathname();

    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState({
        status: 'success',
        content: t('texts.send-message-success')
    });

    const initValues = { email: '', training_center: TRAINING_CENTER };
    const initState = { isLoading: false, error: false, values: initValues };

    const [state, setState] = useState<Form>(initState);
    const { values, isLoading } = state;

    const hosts = contacts?.social_links?.map((host: SOCIAL) => {
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
                    size={windowSize.width <= 1440 ? 15 : 30}
                    fill='#B2D01B'
                />
            </Link>
        )
    });

    const matrix = courses?.reduce((acc: COURSES_QUERYResult[][], item: COURSES_QUERYResult, index: number) => {
        const rowIndex = Math.floor(index / 6);
        if (!acc[rowIndex]) {
            acc[rowIndex] = [];
        }
        acc[rowIndex].push(item);
        return acc;
    }, []);

    const links = matrix?.map((row: any[], rowIndex: React.Key | string ) => (
        <div key={rowIndex} className={styles.row}>
            {row.map((course: COURSES_QUERYResult) => (
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

    const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
        const { target } = event;
        const { name, value } = target;

        setState((prev: Form) => ({
            ...prev,
            values: {
                ...prev.values,
                [name]: value,
            },
        }));
    };

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            email: state.values.email,
            training_center: TRAINING_CENTER,
        };

        try {
            if (formData.email === '') {
                return
            };

            const res: ContactUsResponse = await sendEmail(formData);

            if (res.status !== 200) {
                throw new Error('Failed to send message');
            }

            setOpen(true);
            setInfo({
                status: 'success',
                content: t('texts.send-message-success'),
            });

            setState(() => ({
                ...initState,
                isLoading: false,
                error: false,
            }));
        } catch (error) {
            setOpen(true);
            setInfo({
                status: 'info',
                content: t('texts.send-message-failure'),
            });

            setState((prev: Form) => ({
                ...prev,
                isLoading: false,
                error: true,
            }));
        }
    };

    const handleClose = () => setOpen(false);


    return (
        <>
            <Snackbars
                open={open}
                handleChange={handleClose}
                info={info}
            />
            <footer className={styles.footer}>
                <div className={styles.boxs}>
                    <div className={styles.request}>
                        <div>
                            <p className={cn(styles['request-text'], MMArmenU.className)}>
                                <span>{t("texts.register")}</span> {t("texts.request-now")}
                            </p>
                        </div>
                        <div className={styles.newsletter}>
                            <form onSubmit={handleSubmit}>
                                <div className={styles['form-input']}>
                                    <InputField
                                        className={cn(styles.input, MMArmenU.className)}
                                        name='email'
                                        type='email'
                                        placeholder={t('contact-us-form.email')}
                                        requiredField={true}
                                        value={values.email}
                                        onChange={handleChange}
                                    />
                                </div>
                                <div className={styles['form-button']}>
                                    <button
                                        type="submit"
                                        className={cn(styles.btnEnviar, MMArmenU.className)}
                                    >
                                        {t("contact-us-form.send")}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
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
                            {contacts?.phone_numbers?.map((number, index) => (
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
                                href={`mailto:${contacts?.email}`}
                                aria-label='Email'
                                className={styles.link}
                            >
                                <p className={MMArmenU.className}>
                                    {contacts?.email}
                                </p>
                            </Link>
                            <p className={styles.address}>{contacts?.address}</p>
                            <div className={styles.hosts}>
                                {hosts}
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
};

export default Footer;
