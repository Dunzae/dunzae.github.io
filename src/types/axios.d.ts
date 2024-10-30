import AxiosInstance from "axios";

type ReturnType = {
    data? : any,
    error? : string
}

declare module 'axios' {
    export interface AxiosInstance 
    {
        getApi : (url : string, data : any) => Promise<ReturnType>,
        postApi : (url : string, data : any) => Promise<ReturnType>
    }
}