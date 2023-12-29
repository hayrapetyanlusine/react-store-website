import {env} from "../consts";
import {OrderedProduct} from "../interfaces/orderProduct";

export const createOrder = async (data: OrderedProduct): Promise<any> => {
    const response = await fetch(`${env}orders`, {
        method: 'POST',
        headers: {
            'Authorization': `Bearer ${localStorage.getItem("token")}`,
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            orderItems: data,
            shippingAddress1: "No 45, Park Street",
            shippingAddress2: "No 46, Main Street",
            city: "Colombo",
            zip: "10600",
            country: "Sri Lanka",
            phone: "+94717185748",
            user: `${localStorage.getItem("userId")}`,
        }),
    });

    return await response.json();
}
