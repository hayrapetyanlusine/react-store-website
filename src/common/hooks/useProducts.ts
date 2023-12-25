import {useQuery, useInfiniteQuery} from "react-query";
import {getCategories} from "../api/get-categories";
import {getProducts} from "../api/get-products";

export const useProducts = () => useQuery({
    queryKey: ["products"],
    queryFn: () => getProducts()
});

// export const useProducts = () => {
//     const { data, fetchNextPage, hasNextPage, isLoading } = useInfiniteQuery({
//         queryKey: ["products"],
//         queryFn: ({pageParam = 1}) => getProducts(pageParam),
//         getNextPageParam: (lastPage, pages) => lastPage.nextCursor
//     });
//
//     const loadMore = () => fetchNextPage();
//
//     return {
//         data,
//         isLoading,
//         loadMore,
//         hasMore: hasNextPage,
//     }
// };