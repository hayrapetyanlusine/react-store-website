import {env} from "../consts";

export async function getOrders() {
    const token: string = `Bearer ${localStorage.getItem("token")}`;
    const id: string | null = localStorage.getItem("userId");

    const response = await fetch(`${env}orders/get/usersorders/${id}`, {
        headers: {
            'Authorization': token,
            'Content-Type': 'application/json',
        }
    });

    return await response.json();
}