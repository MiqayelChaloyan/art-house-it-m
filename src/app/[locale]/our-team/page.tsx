'use server'

import OurTeam from '@/components/screens/our-team';
import { getOurTeam } from '@/utils/data';
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

    return (<OurTeam data={data}/>);
};