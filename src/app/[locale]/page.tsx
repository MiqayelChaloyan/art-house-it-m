'use server'

import Home from '@/src/components/screens/home';
import { getAboutDetails, getHomeDetails, getPartners } from '@/src/utils/data';
import { notFound } from 'next/navigation';


interface RootProps {
    params: {
        locale: string;
    }
};

export default async function Page({
    params: { locale }
}: Readonly<RootProps>) {
    const about = await getAboutDetails(locale);
    const data = await getHomeDetails(locale);
    const partners = await getPartners(locale);

    if(!about || !data || !partners) {
        notFound();
    }

    return (<Home about={about} data={data} partners={partners} />)
};