'use server'

import About from '@/src/components/screens/about';
import { getAboutDetails } from '@/src/utils/data';
import { notFound } from 'next/navigation';


interface Props {
    params: {
        locale: string;
    }
};

export default async function Page({
    params: { locale }
}: Readonly<Props>) {
    const data = await getAboutDetails(locale);

    if (!data) {
        notFound();
    }

    return (<About data={data} />);
};