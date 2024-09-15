'use client'

import React, { FormEvent, useState } from 'react';

import { useTranslations } from 'next-intl';

import Snackbars from '@/components/components/snackbar';
import Select from '@/lib/ui/select';
import InputField from '@/lib/ui/InputField';
import InputNumber from '@/lib/ui/InputNumber';

import { sendContactUs } from '@/api';
import { TRAINING_CENTER } from '@/constants';

import { MMArmenU } from "@/constants/font";
import { FormContact } from '@/types';
import { ContactUsResponse } from '@/types';

import cn from 'classnames';

import styles from './styles.module.sass';


interface FormT {
    isLoading: boolean;
    error: boolean;
    values: FormContact;
};

interface Props {
    lessons: LESSON[];
    lessonsArmenianKeyword: LESSON[];
    classNameProperty: 'small' | 'large';
};

const Form = ({
    lessons,
    lessonsArmenianKeyword,
    classNameProperty
}: Readonly<Props>) => {
    const t = useTranslations();
    const [course, setCourse] = useState<string>('');

    const [open, setOpen] = useState(false);
    const [info, setInfo] = useState({
        status: 'success',
        content: t('texts.send-message-success')
    });

    const initValues = { full_name: '', email: '', phone: '', course_name: t('contact-us-form.select-course'), training_center: TRAINING_CENTER };
    const initState = { isLoading: false, error: false, values: initValues };

    const [state, setState] = useState<FormT>(initState);
    const { values, isLoading, error } = state;


    const handleChange = ({ target }: any) =>
        setState((prev: FormT) => ({
            ...prev,
            values: {
                ...prev.values,
                [target.name]: target.value,
            },
        }));

    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        const formData = {
            full_name: state.values.full_name,
            email: state.values.email,
            phone: state.values.phone,
            course_name: course,
            training_center: TRAINING_CENTER,
        };

        try {
            if (formData.course_name === '') {
                return
            };

            const res: ContactUsResponse = await sendContactUs(formData);

            if (res.status !== 200) {
                throw new Error('Failed to send message');
            }

            setOpen(true);
            setInfo({
                status: 'success',
                content: t('texts.send-message-success'),
            });

            setState(() => ({
                ...initState,
                isLoading: false,
                error: false,
            }));
        } catch (error) {
            setOpen(true);
            setInfo({
                status: 'info',
                content: t('texts.send-message-failure'),
            });

            setState((prev: FormT) => ({
                ...prev,
                isLoading: false,
                error: true,
            }));
        }
    };

    const getValueToSlug = (valueName: string, slug: number | string) => {
        const course: LESSON | any = valueName === 'course_name' && lessonsArmenianKeyword?.find((item: LESSON) => {
            return item.slug === slug;
        });

        if (course.course_name) {
            return setCourse(course.course_name);
        }
    };

    const handleClose = () => setOpen(false);


    return (
        <>
            <Snackbars
                open={open}
                handleChange={handleClose}
                info={info}
            />
            <form onSubmit={handleSubmit} className={styles.form}>
                <InputField
                    className={cn(styles.input, MMArmenU.className)}
                    name='full_name'
                    type='name'
                    placeholder={t('contact-us-form.full-name')}
                    requiredField={true}
                    value={values.full_name}
                    onChange={handleChange}
                />
                <InputField
                    className={cn(styles.input, MMArmenU.className)}
                    name='email'
                    type='email'
                    placeholder={t('contact-us-form.email')}
                    requiredField={true}
                    value={values.email}
                    onChange={handleChange}
                />
                <InputNumber
                    className={cn(styles.input, MMArmenU.className)}
                    name='phone'
                    type='phone'
                    placeholder={t('contact-us-form.phone-number')}
                    maskNumber='+374 99 99 99 99'
                    requiredField={true}
                    value={values.phone}
                    onChange={handleChange}
                />
                <Select
                    data={lessons}
                    valueName='course_name'
                    handleChange={setState}
                    state={state}
                    classNameProperty={`${classNameProperty}-itm`}
                    isClear={false}
                    getValueToSlug={getValueToSlug}
                />
                <button type='submit' className={styles.button}>
                    {isLoading ?
                        <span className={MMArmenU.className}>
                            {`${t('contact-us-form.loading')}...`}
                        </span>
                        :
                        <span className={MMArmenU.className}>
                            {t('contact-us-form.send')}
                        </span>
                    }
                </button>
            </form>
        </>
    )
};

export default Form;