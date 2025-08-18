'use server'

import Orders from '@/src/components/screens/orders';
import { getSelectOptions, getWebSitesDetails } from '@/src/utils/data';
import { notFound } from 'next/navigation';


interface Props {
    params: {
        locale: string;
    }
};

export default async function Page({
    params: { locale }
}: Readonly<Props>) {
    const orders = await getSelectOptions(locale);
    const ordersArmenianKeyword = await getSelectOptions('am');
    const data = await getWebSitesDetails(locale);

    if (!orders || !ordersArmenianKeyword || !data) {
        notFound();
    };

    return (
        <Orders
            orders={orders?.orders_names}
            ordersArmenianKeyword={ordersArmenianKeyword?.orders_names}
            data={data}
        />
    );
};