import {IHttpResponse} from "../interfaces/common";

const get = async <T>(url: string): Promise<IHttpResponse<T>> => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (e) {
        throw new Error(e);
    }
}

export {
    get
}
