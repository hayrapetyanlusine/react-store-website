import {useQuery} from "react-query";
import { getFeatured } from "../api/get-featured";

export const useFeatured = (count: any) => {
    return useQuery({
        queryKey: ["featuredQuery", count],
        queryFn: () => getFeatured(count)
    })
}