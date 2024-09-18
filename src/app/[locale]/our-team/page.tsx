'use server'

import OurTeam from '@/src/components/screens/our-team';
import { getOurTeam } from '@/src/utils/data';
import { notFound } from 'next/navigation';


interface Props {
    params: {
        locale: string;
    }
};

export default async function Page({
    params: { locale }
}: Readonly<Props>) {
    const data = await getOurTeam(locale);

    if (!data) {
        notFound();
    }

    return (<OurTeam data={data} />);
};