'use server'

import Home from "@/components/screens/home";
import { getAboutDetails, getHomeDetails } from "@/utils/data";


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

    return (<Home about={about} data={data} />)
};