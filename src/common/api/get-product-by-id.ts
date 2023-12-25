import {env} from "../consts";

export const getProductById = async (id: string | undefined) => {
    const response = await fetch(`${env}products/${id}`);
    return await response.json();
}