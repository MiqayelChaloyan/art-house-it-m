'use server'

import axios from 'axios';

import { BASE_URL } from '@/src/constants/api';
import { FormContact, FormOrder } from '@/src/types';
import { sendEmail } from '../api/_api';


// IT-M
// SEND CONTACT US
export const sendContactUs = async (contactUs: FormContact) => {
    try {

        const emailResponse = await sendEmail(contactUs);

        const apiResponse = await axios.post(BASE_URL, null, {
            params: { contactUs },
            timeout: 10000
        });

        if (emailResponse.success && apiResponse.status === 200) {
            return { status: 200 };
        } else {
            const error = !emailResponse.success 
                ? emailResponse.error 
                : 'API request failed';
            return { status: 500, error };
        }
    } catch (error) {
        return { 
            status: 500, 
            error: error instanceof Error ? error.message : 'Unknown error' 
        };
    }
};

// SEND ORDER
export const sendOrderForm = async (itmFormData: FormOrder) => {
    try {
        const emailResponse = await sendEmail(itmFormData);

        const apiResponse = await axios.post(BASE_URL, null, {
            params: { itmFormData },
            timeout: 10000
        });

        if (emailResponse.success && apiResponse.status === 200) {
            return { status: 200 };
        } else {
            const error = !emailResponse.success 
                ? emailResponse.error 
                : 'API request failed';
            return { status: 500, error };
        }
    } catch (error) {
        return { 
            status: 500, 
            error: error instanceof Error ? error.message : 'Unknown error' 
        };
    }
};