import React, {FC} from "react";
import {useProducts} from "../../../common/hooks/useProducts";
import {TopRatingItem} from "./topRatingItem/TopRatingItem";
import {Loading} from "../../general/loading/Loading";
import {Product} from "../../../common/interfaces/product";
import "./TopRatingProducts.scss";
import {Btn} from "../../general/btn/Btn";
import {Link} from "react-router-dom";

export const TopRatingProducts: FC = () => {
    const {data: products, isLoading} = useProducts();

    return (
        <div className="products">
            <h1>TOP RATING</h1>
            {isLoading ? (
                <Loading/>
            ) : (
                <div className="product-item-wrapper">
                    {
                        products.map(({ id, image, name, numReviews, rating, category}: Product) => (
                            <Link to={`store/${id}/${category._id}`} key={id}>
                                <TopRatingItem
                                    key={id}
                                    url={image}
                                    name={name}
                                    price={numReviews}
                                    rating={rating}
                                />
                            </Link>
                        ))
                    }
                </div>
            )}
            <Btn text={"Load more"}/>
        </div>
    )
}
