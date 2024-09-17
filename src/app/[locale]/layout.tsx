'use server'

import { use } from 'react';

import { NextIntlClientProvider, useMessages } from 'next-intl';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

import { Locale } from '@/locales';

import Footer from '@/components/components/footer';
import GoBack from '@/components/components/goBack';
import Header from '@/components/components/header';
import PlayerModal from '@/components/components/playerModal';
import ScrollToTopButton from '@/components/components/scrollToTopButton';
import Advertisement from '@/components/components/advertisement';

import { ImagePath } from '@/types';

import { StoreProvider } from '@/store/StoreProvider';

import { urlForImage } from '../../../sanity/imageUrlBuilder';

import { generateMetadataDynamic } from '@/utils/default-metadata';
import { getContacts, getHomeDetails } from '@/utils/data';

import { MMArmenU } from '@/constants/font';

import '@/styles/globals.sass';


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
                            <GoBack locale={locale} theme='#1A2738' />
                            <ScrollToTopButton theme='#1A2738' />
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


export async function generateMetadata({
    params: { locale },
}: {
    params: { locale: Locale };
}): Promise<Metadata> {
    const data = await getHomeDetails(locale);

    const ogTitle = data.ogTitle;
    const ogImage = data.ogImage;
    const ogDescription = data?.ogDescription;

    const path: ImagePath = urlForImage(ogImage);
    const icon = null;

    const metadata = generateMetadataDynamic(ogDescription, ogTitle, path, icon, locale);
    return metadata;
};