import axios from "axios";
import { CacheFunc, ErrorResponseInt, RequestInt } from "./types";

export const CACHE_KEYS = {
    SUPPORTED_CURRENCIES: "SUPPORTED_CURRENCIES",
    APP_IS_ACTIVE: "APP_IS_ACTIVE",
    TOKEN: "TOKEN",
    PUSH_NOTIFICATION_TOKEN: "PUSH_NOTIFICATION_TOKEN",
};

const API_BASE_URL = "";

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

export const handleError = (err: any): ErrorResponseInt => {
    const errorPayload: any = {
        message: "Something went wrong",
        statusCode: 500,
        errorCode: 0,
    };
    if (err?.name === "AxiosError") {
        const response = err.response;
        errorPayload.message =
            response?.data?.message || "Something went wrong with your request";
        errorPayload.statusCode = response?.data?.httpStatusCode || 500;
        errorPayload.errorCode = Number(response?.data?.errorCode);
    }

    // if (!Env.isProd) devLog("Error message", errorPayload);
    return errorPayload;
};

export const devLog = (...keys: any) => {
    // if (Env.isProd) return;
    console.log(`\n\n\n======${keys.shift()}======\n`);
    keys.forEach((key: any) => console.log(key));
};

export const cache: CacheFunc = {
    set: async (cacheKey, data, duration) => {
        const cacheData: any = { data };
        if (duration) cacheData.expireAt = Date.now() + 1000 * duration;
        await localStorage.setItem(cacheKey, JSON.stringify(cacheData));
        return true;
    },
    get: async (cacheKey) => {
        const cachedData = await localStorage.getItem(cacheKey);
        if (cachedData) {
            const { data, expireAt } = JSON.parse(cachedData);
            if (expireAt && Date.now() > expireAt)
                await localStorage.removeItem(cacheKey);
            else return data;
        }
        return null;
    },

    remove: async (cacheKey) => {
        await localStorage.removeItem(cacheKey);
        return true;
    },
};

export const request: RequestInt = {
    get: async (url, headers = {}) => {
        try {
            const Authorization = await cache.get(CACHE_KEYS.TOKEN);
            headers = { Authorization, ...headers };
            const requestParams = {
                url: API_BASE_URL + url,
                method: "GET",
                headers,
            };

            // if (!Env.isProd) devLog("GET", requestParams);
            const response = await axios(requestParams);

            return response?.data;
        } catch (err) {
            throw handleError(err as Error);
        }
    },

    post: async ({ url, data, headers = {} }) => {
        try {
            const Authorization = await cache.get(CACHE_KEYS.TOKEN);
            const requestParams = {
                url: API_BASE_URL + url,
                method: "POST",
                data,
                headers: {
                    ...headers,
                    Authorization,
                },
            };

            // if (!Env.isProd) devLog("POST", requestParams);
            const response = await axios(requestParams);

            devLog("POST response", response);
            return response?.data;
        } catch (err) {
            throw handleError(err as Error);
        }
    },

    delete: async (url, headers = {}) => {
        try {
            const Authorization = await cache.get(CACHE_KEYS.TOKEN);
            headers = { ...headers, Authorization };
            const { data } = await axios.delete(API_BASE_URL + url, { headers });

            return data;
        } catch (err) {
            throw handleError(err as Error);
        }
    },
    patch: async ({ url, data, headers = {} }) => {
        try {
            const Authorization = await cache.get(CACHE_KEYS.TOKEN);
            const requestParams = {
                url: API_BASE_URL + url,
                method: "PATCH",
                data,
                headers: {
                    ...headers,
                    Authorization,
                },
            };

            // if (!Env.isProd) devLog("PATCH", requestParams);
            const response = await axios(requestParams);

            devLog("POST response", response);
            return response.data;
        } catch (err) {
            throw handleError(err as Error);
        }
    },
};


