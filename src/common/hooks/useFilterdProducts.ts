import {useEffect, useState} from "react";

export const useFilteredProducts = (products: object[], id: string | undefined) => {
    const [filteredProducts, setFilteredProducts] = useState<any[]>([]);

    useEffect(() => {
        if (products) {
            const filterProducts = products.filter((product: any) => product.category?._id === id);
            setFilteredProducts(filterProducts);
        }
    }, [id, products]);

    return filteredProducts;
}
