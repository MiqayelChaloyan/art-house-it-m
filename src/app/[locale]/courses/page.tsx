'use server'

import Courses from '@/src/components/screens/courses';
import { getCourses } from '@/src/utils/data';
import { notFound } from 'next/navigation';


interface Props {
    params: {
        locale: string;
    }
};

export default async function Page({
    params: { locale }
}: Readonly<Props>) {
    const data = await getCourses(locale);

    if (!data) {
        notFound();
    };

    return (<Courses data={data} locale={locale}/>);
};