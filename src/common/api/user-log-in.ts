import {env, requestHeaders} from "../consts";
import {LogIn} from "../interfaces/login";

export const userLogIn = async (data: LogIn): Promise<any> => {
    const resp = await fetch(`${env}users/login`, {
        method: "POST",
        body: JSON.stringify(data),
        headers: requestHeaders
    })

    const respData = await resp.json();

    localStorage.setItem("token", respData.token);
}