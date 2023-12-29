import {useQuery} from "react-query";
import {getOrders} from "../api/get-orders";

export const useGetOrders = () => useQuery({
    queryKey: ["get orders"],
    queryFn: () => getOrders()
});