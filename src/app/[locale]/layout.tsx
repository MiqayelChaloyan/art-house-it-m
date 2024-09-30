'use server'

import { use } from 'react';

import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Locale } from '@/src/locales';

import Footer from '@/src/components/components/footer';
import GoBack from '@/src/components/components/goBack';
import Header from '@/src/components/components/header';
import PlayerModal from '@/src/components/components/playerModal';
import ScrollToTopButton from '@/src/components/components/scrollToTopButton';
import Advertisement from '@/src/components/components/advertisement';

import { ImagePath, Site } from '@/src/types';

import { StoreProvider } from '@/src/store/StoreProvider';

import { urlForImage } from '@/sanity/imageUrlBuilder';

import { generateMetadataDynamic } from '@/src/utils/default-metadata';
import { getContacts } from '@/src/utils/data';
import { sanityFetch } from '@/src/api/sanity-fetch';
import { SITE_META_QUERY } from '@/sanity/services';

import { MMArmenU } from '@/src/constants/font';

import colors from '@/src/themes';

import '@/src/styles/globals.sass';


interface RootLayoutProps {
    children: React.ReactNode;
    params: {
        locale: string;
    };
};

function RootLayout({
    children,
    params: { locale },
}: Readonly<RootLayoutProps>) {
    const messages = useMessages();

    const contacts = use(getContacts(locale));

    if (!contacts) {
        notFound();
    };

    return (
        <html lang={locale}>
            <body className={MMArmenU.className}>
                <NextIntlClientProvider locale={locale} messages={messages}>
                    <StoreProvider>
                        <Header typePosition='fixed' locale={locale} />
                        <div className='itm-container'>
                            <GoBack locale={locale} theme={colors.blue} />
                            <ScrollToTopButton theme={colors.blue} />
                            {children}
                            <Advertisement />
                            <Footer contacts={contacts} />
                        </div>
                        <PlayerModal />
                    </StoreProvider>
                </NextIntlClientProvider>
            </body>
        </html>
    );
};

export default RootLayout;


async function getSiteMeta(
    query: string = SITE_META_QUERY,
    locale?: Locale,
): Promise<Site> {
    const site = await sanityFetch<Site[]>({
        query,
        params: { language: locale },
    });

    return site[0];
};

export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: Locale };
}): Promise<Metadata> {
    const meta: Site = await getSiteMeta(SITE_META_QUERY, locale);
    const { ogDescription, ogTitle, ogImage, keywords } = meta;
    const path: ImagePath = urlForImage(ogImage);
    const icon = null;

    const metadata = generateMetadataDynamic(ogDescription, ogTitle, path, icon, locale, keywords);
    return metadata;
};