'use client'

import React from 'react';

import Link from 'next/link';

import Container from '../container';

import { FaFacebookF, FaTwitter, FaPinterestP, FaTiktok } from 'react-icons/fa';
import { FaInstagram, FaViber } from 'react-icons/fa6';
import { IoMailSharp } from 'react-icons/io5';
import { GrLinkedinOption } from 'react-icons/gr';
import { PiTelegramLogoLight, PiWhatsappLogo } from 'react-icons/pi';
import { AiOutlineYoutube } from 'react-icons/ai';

import Logo from '@/src/lib/icons/Logo';

import useWindowSize from '@/src/hooks/useWindowSize';
import { socialNetwork } from '@/src/types';

import { MMArmenU } from '@/src/constants/font';

import colors from '@/src/themes';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    contacts?: CONTACT_US_QUERYResult;
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

const Footer = ({ contacts }: Readonly<Props>) => {
    const windowSize = useWindowSize();
    const currentYear = new Date().getFullYear();

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
                    fill={colors.green}
                />
            </Link>
        )
    });

    const phoneNumbers = contacts?.phone_numbers.map((number: string, index: number) => {
        const phoneNumber = index < contacts.phone_numbers.length - 1 ? `${number}, ` : `${number}`;
        const tel = 'tel:' + number.replace(/\s/g, '');

        return (
            <Link key={number} href={tel} aria-label={number} className={styles.icon}>
                <p className={cn(styles.link, MMArmenU.className)}>
                    {phoneNumber}
                </p>
            </Link>
        )
    });

    return (
        <footer className={styles.footer}>
            <Container className='container'>
                <div className={styles.column}>
                    <div className={styles.logo}>
                        <Logo
                            width={windowSize.width <= 1440 ? 150 : 204}
                            height={84}
                            textColor={colors.white}
                            fill={colors.blue}
                        />
                    </div>
                    <div>
                        <div className={styles.address}>
                            <div className={styles.phone_numbers}>
                                {phoneNumbers}
                            </div>
                            <Link
                                href={`mailto:${contacts?.email}`}
                                aria-label='Email'
                                className={styles.link}
                            >
                                <p className={MMArmenU.className}>
                                    {contacts?.email}
                                </p>
                            </Link>
                        </div>
                        <p className={cn(styles.reserved, MMArmenU.className)}>
                            {`©️ ${currentYear} ITM`}
                        </p>
                    </div>
                    <div className={styles.hosts}>
                        {hosts}
                    </div>
                </div>
            </Container>
        </footer>
    );
};

export default Footer;
