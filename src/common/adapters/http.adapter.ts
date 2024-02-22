import axios, { AxiosInstance } from "axios";
import { IHttpAdapter } from "../interfaces/http-adapter.interface";
import { Injectable } from "@nestjs/common";

@Injectable()
export  class HttpAdapter implements IHttpAdapter {

    private axios : AxiosInstance = axios;

    async get<T>(url: string): Promise<T> {
        try {
           const { data }  = await  this.axios.get<T>(url);
           return data
        } catch (error) {
            throw new Error('Ocurrio un error en la petción - revisar Logs')
        }
    }

}