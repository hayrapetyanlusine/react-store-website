import React, {FC} from "react";
import {useProducts} from "../../common/hooks/useProducts";
import {TopRatingItem} from "../topRatingItem/TopRatingItem";
import {Loading} from "../loading/Loading";
import {Product} from "../../common/interfaces/product";
import "./Products.scss";
import {Btn} from "../btn/Btn";

export const Products: FC = () => {
    const {data: products, isLoading} = useProducts();
    // const {data: products, isLoading, loadMore, hasMore} = useProducts();

    return (
        <div className="products">
            <h1>TOP RATING</h1>
            {isLoading ? (
                <Loading/>
            ) : (
                <div className="product-item-wrapper">
                    {
                        // products?.pages
                        products.map(({ id, image, name, numReviews, rating }: Product) => (
                            <TopRatingItem
                                key={id}
                                url={image}
                                name={name}
                                price={numReviews}
                                rating={rating}
                            />
                        ))
                    }
                </div>
            )}
            <Btn text={"Load more"}/>
            {/* {hasMore && <button onClick={loadMore}>Load More</button>} */}
        </div>
    )
}
