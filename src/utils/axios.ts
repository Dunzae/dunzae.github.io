import axios, { AxiosInstance, isAxiosError } from "axios";

const ax : AxiosInstance = axios.create({
    baseURL : process.env.SERVER_URL,
    headers : {
        'Content-Type' : "application/x-www-form-urlencoded"
    }
})


ax.getApi = async (url : string, data : any, config? : any) => {
    try {
        const result = await ax.get(url, data)
        return result;
    } catch(e) {
        if (isAxiosError(e)) {
            if(e.response === undefined) {
                return {
                    error: "The server is down",
                }
            }
            else {
                return {
                    error: "Unknown error",
                }
            }
        }
        return {
            error: "Unknown error",
        }
    }
}

ax.postApi = async (url : string, data : any, config? : any) => {
    try {
        const result = await ax.post(url, data)
        return result;
    } catch(e) {
        if (isAxiosError(e)) {
            if(e.response === undefined) {
                return {
                    error: "The server is down",
                }
            } else {
                return {
                    error: "Unknown error",
                }
            }
        }
        return {
            error: "Unknown error",
        }
    }
}

export default ax;