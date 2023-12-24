import {env, requestHeaders} from "../consts";
import { LogIn } from "../interfaces/login";

export const userLogIn = async (data: LogIn): Promise<any> => {
    await fetch(`${env}users/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: requestHeaders
    })
}