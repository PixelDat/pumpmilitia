import axios from "axios";
import { CacheFunc, ErrorResponseInt, RequestInt } from "./types";
const Cookies = require('js-cookie');
let encrypt = Cookies.get('encrypt_id');


export class Helpers {
    static isValidPassword(password: string) {
        const errors = [];
        // Check for minimum 8 characters
        if (password.length < 8) {
            errors.push('min');
        }
        // Check for at least one uppercase letter
        if (!/[A-Z]/.test(password)) {
            errors.push('ucl');
        }
        // Check for at least one symbol or non-word character
        if (!/\W/.test(password)) {
            errors.push('sym');
        }
        return errors.length === 0 ? true : errors;
    }
}

export const bindAddress = async (address: string) => {

    let params = {
        wallet_address: address,
    }

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://evp-blockchain-service-cea2e4kz5q-uc.a.run.app/submit-bind-address',
        headers: {
            'Authorization': `${encrypt}`
        },
        data: params
    };
    try {
        const response = await axios.request(config);
        return true;
    } catch (error: any) {
        return false
    }
}




export const checkHash = async (transactionHash: string) => {

    let params = {
        transactionHash: transactionHash,
    }

    let config = {
        method: 'post',
        maxBodyLength: Infinity,
        url: 'https://evp-blockchain-service-cea2e4kz5q-uc.a.run.app/process-event',
        headers: {
            'Authorization': `${encrypt}`
        },
        data: params
    };
    try {
        const response = await axios.request(config);
        return true;
    } catch (error: any) {
        return false
    }
}