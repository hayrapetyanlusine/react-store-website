import {useQuery} from "react-query";
import {getProductById} from "../api/get-product-by-id";

export const useProductById = (id: string | undefined) => {
    return useQuery(
        ["product-item", id],
        () => getProductById(id),
        {
            enabled: !!id
        }
    )
}