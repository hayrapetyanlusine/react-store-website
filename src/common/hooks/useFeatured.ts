import {useInfiniteQuery, useQuery} from "react-query";
import {getFeatured} from "../api/get-featured";

export const useFeatured = () => {
    return useQuery({
        queryKey: ["featuredQuery"],
        queryFn: () => getFeatured()
    })
}