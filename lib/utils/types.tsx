export interface CacheFunc {
    set: (cacheKey: string, data: any, duration?: number) => Promise<boolean>;
    get: (cacheKey: string) => Promise<any>;
    remove: (cacheKey: string) => Promise<boolean>;
}

export type GlobalRecord = Record<string, any> | any;


export interface RequestResponseInt {
    data: GlobalRecord | GlobalRecord[];
    success: boolean;
    message: string;
}


export interface RequestInt {
    post: (data: {
        url: string;
        data?: GlobalRecord;
        headers?: GlobalRecord;
    }) => Promise<RequestResponseInt>;

    patch: (params: {
        url: string;
        data?: GlobalRecord;
        headers?: GlobalRecord;
    }) => Promise<RequestResponseInt>;

    get: (
        url: string,
        headers?: Record<string, string | number>
    ) => Promise<RequestResponseInt>;

    delete: (
        url: string,
        headers?: Record<string, string | number>
    ) => Promise<RequestResponseInt>;
}


export interface ErrorResponseInt {
    message: string;
    statusCode: number;
    errorCode: number;
}