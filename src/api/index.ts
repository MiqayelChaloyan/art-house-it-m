'use server'

import axios from 'axios';

import { BASE_URL } from '@/src/constants/api';
import { FormContact, FormOrder } from '@/src/types';


// IT-M
// SEND CONTACT US
export const sendContactUs = async (contactUs: FormContact) => {
    try {
        const response = await axios.post(BASE_URL, null, {
            params: { contactUs },
            timeout: 10000
        });

        return {
            status: response.status
        };
    } catch (error) {
        return error
    }
};

// SEND ORDER
export const sendOrderForm = async (itmFormData: FormOrder) => {
    try {
        const response = await axios.post(BASE_URL, null, {
            params: { itmFormData },
            timeout: 10000
        });

        return {
            status: response.status
        };
    } catch (error) {
        return error
    }
};