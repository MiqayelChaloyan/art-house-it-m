'use client'

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Pages } from '@/src/constants/pages';

import { HiHome } from 'react-icons/hi2';

import { MMArmenU } from '@/src/constants/font';
import colors from '@/src/themes';

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
            <HiHome color={colors.white} size={30} />
        </Link>
    )
};

export default GoBack;