'use client'

import Form from './Form';
import OurWorks from './OurWorks';
import Container from '@/components/components/container';

import { MMArmenU } from '@/constants/font';

import styles from './styles.module.sass';


interface Props {
    orders: ORDER[];
    ordersArmenianKeyword: ORDER[];
    data: WEB_SITES_DETAILS_QUERYResult;
};

const Orders = ({ orders, ordersArmenianKeyword, data }: Readonly<Props>) => {
    return (
        <section id='orders' className={MMArmenU.className}>
            <Container className='container'>
                <OurWorks data={data} />
                <h2 className={styles.title}>Հետադարձ կապ</h2>
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