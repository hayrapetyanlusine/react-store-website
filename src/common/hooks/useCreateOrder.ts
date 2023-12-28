import {useMutation} from "react-query";
import {createOrder} from "../api/create-order";
import {OrderedProduct} from "../interfaces/orderProduct";

export const useCreateOrder = () => {
    return useMutation({
        mutationKey:["create order"],
        mutationFn:(data: OrderedProduct) => createOrder(data)
    })
};