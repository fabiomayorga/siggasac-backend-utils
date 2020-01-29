import Axios, { AxiosResponse } from 'axios';
import { v4, v6 } from 'public-ip';

export class SigasacRequest {
    static async get(
        uri: string,
        _module: string,
        version: string,
        token?: string,
        params?: any
    ): Promise<AxiosResponse> {
        try {
            const ip = await v4();

            return await Axios.get(`${ip}/${_module}/${version}/${uri}`, {
                headers: {
                    Authorization: `Bearer ${token}`
                },
                params
            });
        } catch (error) {
            throw error;
        }
    }

    static async post(
        uri: string,
        _module: string,
        version: string,
        token?: string,
        body?: any,
        params?: any
    ): Promise<AxiosResponse> {
        try {
            const ip = await v4();

            return await Axios.post(
                `${ip}/${_module}/${version}/${uri}`,
                body,
                {
                    headers: {
                        Authorization: `Bearer ${token}`
                    },
                    params
                }
            );
        } catch (error) {
            throw error;
        }
    }
}
