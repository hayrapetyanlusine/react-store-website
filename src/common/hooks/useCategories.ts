import {useQuery} from "react-query";
import {getCategories} from "../api/get-categories";

export const useCategories = () => useQuery({
    queryKey: ["categories"],
    queryFn: () => getCategories(),
});