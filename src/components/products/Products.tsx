import React, {FC} from "react";
import {useProducts} from "../../common/hooks/useProducts";
import {TopRatingItem} from "../topRatingItem/TopRatingItem";
import {Loading} from "../loading/Loading";
import {Product} from "../../common/interfaces/product";
import "./Products.scss";
import {Btn} from "../btn/Btn";

export const Products: FC = () => {
    const {data: products, isLoading} = useProducts();

    return (
        <div className="products">
            <h1>TOP RATING</h1>
            {isLoading ? (
                <Loading/>
            ) : (
                <div className="product-item-wrapper">
                    {
                        products.map((product: Product) => (
                            <TopRatingItem
                                key={product.id}
                                url={product.image}
                                name={product.name}
                                price={product.numReviews}
                            />
                        ))
                    }
                </div>
            )}
            <Btn text={"Load more"}/>
        </div>
    )
}
