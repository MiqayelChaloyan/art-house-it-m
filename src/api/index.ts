'use server'

import axios from 'axios';

import { BASE_URL } from '@/constants/api';


// IT-M
// SEND CONTACT US
export const sendContactUsITM = async (ITMFormData: any) => {
    try {
        // const response = await axios.post(BASE_URL, null, {
        //     params: { ITMFormData },
        //     timeout: 10000
        // });

        // return {
        //     status: response.status
        // };



        // TEST
        console.log(ITMFormData)


        return {
            status: 200
        }
    } catch (error) {
        return error
    }
};

// SEND ORDER
export const sendOrderITM = async (ITMFormData: any) => {
    try {
        // const response = await axios.post(BASE_URL, null, {
        //     params: { ITMFormData },
        //     timeout: 10000
        // });

        // return {
        //     status: response.status
        // };



        // TEST
        console.log(ITMFormData)


        return {
            status: 200
        }
    } catch (error) {
        return error
    }
};