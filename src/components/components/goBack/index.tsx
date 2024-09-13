'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Pages } from '@/constants/pages';
import { HiHome } from 'react-icons/hi2';

import { MMArmenU } from '@/constants/font';

import cn from 'classnames';

import styles from './styles.module.sass';


interface Props {
    theme: string;
    locale: string;
};

const GoBack = ({ theme, locale }: Readonly<Props>) => {
    const pathname = usePathname();

    return pathname.includes(`${locale}/`)  && (
        <Link
            href={`/${locale}${Pages.HOME}`}
            aria-label={Pages.HOME}
            className={cn(styles.btn, styles['book-now'], MMArmenU.className)}
            style={{ background: theme }}
        >
            <HiHome color='white' size={30} />
        </Link>
    )
};

export default GoBack;