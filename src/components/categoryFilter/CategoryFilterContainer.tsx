import React, {FC, useEffect, useState} from "react";
import {useCategories} from "../../common/hooks/useCategories";
import {Loading} from "../loading/Loading";
import {CategoryNames} from "./CategoryNames";
import "./CategoryFilter.scss";
import {ProductItem} from "../productItem/ProductItem";
import {FProduct} from "../../common/interfaces/fProducts";
import {Link, useParams} from "react-router-dom";
import {useProducts} from "../../common/hooks/useProducts";
import {useFilteredProducts} from "../../common/hooks/useFilterdProducts";

export const CategoryFilterContainer: FC = () => {
    const {id} = useParams();
    const {data: categories, isLoading: isCategoriesLoading} = useCategories();
    const {data: products, isLoading: isProductLoading} = useProducts();
    const filteredProducts = useFilteredProducts( products, id );

    return (
        <div className="category-filter-container container">
            <div className="category-names">
                <h2>Categories</h2>
                {
                    isCategoriesLoading ? (
                        <Loading/>
                    ) : (
                        categories.map(({_id, name}: { _id: string; name: string }) => (
                            <CategoryNames key={_id} name={name} isActive={id === _id} id={_id}/>
                        ))
                    )
                }
            </div>

            <div className="item-lists">
                {isProductLoading ? (
                    <Loading/>
                ) : (
                    (filteredProducts && filteredProducts.length > 0
                            ? filteredProducts
                            : products
                    ).map(({id, image, name, price, rating, category}: FProduct) => (
                        <Link to={`/store/${id}/${category._id}`} key={id}>
                            <ProductItem key={id} url={image} name={name} price={price} rating={rating}/>
                        </Link>
                    ))
                )}
            </div>
        </div>
    )
}