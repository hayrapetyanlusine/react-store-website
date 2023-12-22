import {env} from "../consts";

export const getCategories = async (): Promise<any> => {
    const response = await fetch(`${env}categories`);
    return await response.json();
}