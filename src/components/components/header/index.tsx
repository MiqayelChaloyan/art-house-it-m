'use client'

import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import { usePathname } from 'next/navigation'
import { useTranslations } from 'next-intl';

import useWindowSize from '@/src/hooks/useWindowSize';

import { Pages } from '@/src/constants/pages';
import { MMArmenU } from '@/src/constants/font';
import LogoMobile from '@/src/lib/icons/LogoMobile';
import Logo from '@/src/lib/icons/Logo';

import LocalSwitcher from '@/src/components/components/local-switcher';

import colors from '@/src/themes';

import cn from 'classnames';

import styles from './styles.module.sass';


interface IHeaderProps {
    typePosition: string;
    locale: string;
};

const navigationLinks = [
    { path: Pages.ABOUT, label: 'about' },
    { path: Pages.COURSES, label: 'courses' },
    { path: Pages.ORDERS, label: 'orders' },
    { path: Pages.PRICE_LIST, label: 'price-list' },
    { path: Pages.OUR_TEAM, label: 'our-team' },
    { path: Pages.CONTACT, label: 'contact' }
];

const Header = ({ typePosition, locale }: Readonly<IHeaderProps>) => {
    const [isSticky, setIsSticky] = useState<boolean>(false);
    const [isOpenMenu, setIsOpenMenu] = useState<boolean>(false);
    const windowSize = useWindowSize();
    const switchColor = windowSize.width <= 991 ? colors.white : colors.gray;

    const t = useTranslations();
    const pathname = usePathname();

    useEffect(() => {
        if (!isSticky) {
            setIsSticky(window.scrollY > 0);
        }

        const handleScroll = () => {
            setIsSticky(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };

    }, []);

    const toggleMenuClick = () => setIsOpenMenu(!isOpenMenu);


    return (
        <header className={cn(
            styles.box,
            typePosition === 'fixed' ? styles.boxFixed : '',
            isSticky ? styles.boxScrolled : '',
            isOpenMenu ? styles.boxOpenMenu : '',
        )}>
            <div className={`block ${styles.wrap}`}>
                {windowSize.width <= 1280 ? (
                    <Link
                        href={`/${locale}${Pages.HOME}`}
                        aria-label={Pages.HOME}
                        className={styles.logoMobile}
                    >
                        <LogoMobile width={40} height={40} fill={colors.green} />
                    </Link>) : (
                    <Link
                        href={`/${locale}${Pages.HOME}`}
                        aria-label={Pages.HOME}
                        className={styles.logo}
                    >
                        <Logo width={windowSize.width <= 1440 ? 150 : 204} height={84} textColor={colors.darkGray} fill={colors.green} />
                    </Link>
                )}
                <div className={cn(
                    styles.content,
                    isOpenMenu ? styles.contentShow : '',
                    isSticky && isOpenMenu ? styles.contentSticky : '',
                )}>
                    <div className={styles.nav}>
                        {navigationLinks.map((link, key) => (
                            <Link
                                key={key}
                                href={`/${locale}${link.path}`}
                                aria-label={link.path}
                                className={cn(styles.link, styles.from_center, pathname === `/${locale}${link.path}` && styles.linkActive, isSticky ? styles.scrollX : styles.scrollY, MMArmenU.className)}
                                prefetch={true}
                                passHref
                                onClick={() => setIsOpenMenu(false)}
                            >
                                {t(`navigation.${link.label}`)}
                            </Link>
                        ))}
                    </div>
                    <LocalSwitcher activeColor={colors.green} color={switchColor} />
                </div>
                <Link
                    href={`/${locale}${Pages.CONTACT}`}
                    aria-label={Pages.CONTACT}
                    className={cn(MMArmenU.className, styles.register)}
                >
                    {t('buttons.register')}
                </Link>
                <button
                    className={cn(
                        styles.menuBtn,
                        isOpenMenu ? styles.menuBtnActive : '',
                    )}
                    onClick={toggleMenuClick}
                    title='Itm Center'
                >
                    <span></span>
                </button>
            </div>
        </header>
    );
};

export default Header;