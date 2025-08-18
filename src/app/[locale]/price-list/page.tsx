'use server'

import Prices from '@/src/components/screens/price-list';
import { getPriceList } from '@/src/utils/data';
import { notFound } from 'next/navigation';


interface Props {
    params: {
        locale: string;
    }
};

export default async function Page({
    params: { locale }
}: Readonly<Props>) {
    const data = await getPriceList(locale);

    if(!data) {
        notFound();
    }

    return (<Prices data={data} />);
};