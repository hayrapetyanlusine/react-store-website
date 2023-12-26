import {env, requestHeaders} from "../consts";
import { Registration } from "../interfaces/registration";

export const createAccount = async (data: Registration): Promise<any> => {
    await fetch(`${env}users/register`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: requestHeaders
    })
}