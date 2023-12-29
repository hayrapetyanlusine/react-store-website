import {useMutation} from "react-query";
import {createOrder} from "../api/create-order";

export const useCreateOrder = () => {
    const {mutate: orders} = useMutation(createOrder);
    return {orders};
};