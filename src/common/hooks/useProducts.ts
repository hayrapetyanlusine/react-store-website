import {useQuery, useInfiniteQuery} from "react-query";
import {getProducts} from "../api/get-products";

export const useProducts = () => useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts()
});