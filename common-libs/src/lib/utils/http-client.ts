import {IHttpResponse} from "../interfaces/common";

const get = async <ReturnTye>(url: string): Promise<IHttpResponse<ReturnTye>> => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        return data;
    } catch (e) {
        throw new Error(e);
    }
}
const post = async <DataType, ReturnType>(url: string, data: DataType): Promise<ReturnType> => {
    try {
        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
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
