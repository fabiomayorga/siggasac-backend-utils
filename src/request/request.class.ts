import Axios, { AxiosResponse } from 'axios';
const axios = require('axios');
import { Logger } from '@nestjs/common';

export class SigasacRequest {
    static async get(
        host: string,
        _module: string,
        version: string,
        uri: string,
        token?: string,
        params?: any
    ): Promise<AxiosResponse> {
        try {
            return await Axios.get(
                `http://${host}/${_module}/${version}/${uri}`,
                {
                    headers: {
                        Authorization: token
                    },
                    params
                }
            );
        } catch (error) {
            throw error;
        }
    }

    static async post(
        host: string,
        _module: string,
        version: string,
        uri: string,
        token?: string,
        body?: any,
        params?: any
    ): Promise<AxiosResponse> {
        try {
            return await Axios.post(
                `http://${host}/${_module}/${version}/${uri}`,
                body,
                {
                    headers: {
                        Authorization: token
                    },
                    params
                }
            );
        } catch (error) {
            Logger.error(error);
            throw error;
        }
    }
}
