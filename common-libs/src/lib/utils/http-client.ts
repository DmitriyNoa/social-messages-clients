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
const post = async <T, L>(url: string, data: T): Promise<L> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data),
        });
        const result = await response.json();

        return result;
    } catch (e) {
        throw new Error(e);
    }
}

export {
    get,
    post,
}
