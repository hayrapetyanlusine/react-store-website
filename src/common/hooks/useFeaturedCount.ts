import {getFeaturedCount} from "../api/get-featured-count";
import {useQuery} from "react-query";

export const useFeaturedCount = (count:number) => {
    return useQuery({
        queryKey:["featuredCount", count],
        queryFn:() => getFeaturedCount(count)
    })
};