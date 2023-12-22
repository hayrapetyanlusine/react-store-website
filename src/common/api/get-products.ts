import {env} from "../consts";

export const getProducts = async (): Promise<any> => {
    const response = await fetch(`${env}products`);
    return await response.json();
}