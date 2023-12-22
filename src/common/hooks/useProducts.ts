import {useQuery} from "react-query";
import {getCategories} from "../api/get-categories";
import {getProducts} from "../api/get-products";

export const useProducts = () => useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts()
});