'use client'

import { useTranslations } from 'next-intl';

import Form from './Form';
import OurWorks from './OurWorks';
import Container from '@/src/components/components/container';

import { MMArmenU } from '@/src/constants/font';

import styles from './styles.module.sass';


interface Props {
    orders: ORDER[];
    ordersArmenianKeyword: ORDER[];
    data: WEB_SITES_DETAILS_QUERYResult;
};

const Orders = ({ orders, ordersArmenianKeyword, data }: Readonly<Props>) => {
    const t = useTranslations('titles');

    return (
        <section id='orders' className={MMArmenU.className}>
            <Container className='container'>
                <OurWorks data={data} />
                <h2 className={styles.title}>
                    {t("feedback")}
                </h2>
                <Form
                    orders={orders}
                    ordersArmenianKeyword={ordersArmenianKeyword}
                    classNameProperty='large'
                />
            </Container>
        </section>
    )
};

export default Orders;