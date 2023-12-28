import { env } from "../consts";

export const getFeaturedCount = async (count: any): Promise<any> => {
    const response = await fetch(`${env}products/get/featured/${count}`);
    return await response.json();
}