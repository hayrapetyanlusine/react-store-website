import { env } from "../consts";

export const getFeatured = async (): Promise<any> => {
    const response = await fetch(`${env}products/get/featured/20`);
    return await response.json();
}