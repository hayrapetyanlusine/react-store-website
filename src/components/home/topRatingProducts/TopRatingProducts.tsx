import React, {FC, useState} from "react";
import {TopRatingItem} from "./topRatingItem/TopRatingItem";
import {Loading} from "../../general/loading/Loading";
import {Product} from "../../../common/interfaces/product";
import "./TopRatingProducts.scss";
import {Link} from "react-router-dom";
import {useFeatured} from "../../../common/hooks/useFeatured";
import {useFeaturedCount} from "../../../common/hooks/useFeaturedCount";

export const TopRatingProducts: FC = () => {
    const [loadMoreCount, setLoadMoreCount] = useState(3);
    const {data: featured, isLoading: featuredIsLoading} = useFeaturedCount(loadMoreCount);

    const handleLoadMore = (): void => {
        setLoadMoreCount((loadMoreCount: number) => loadMoreCount + 6);
    }

    return (
        <div className="products">
            <h1>TOP RATING</h1>
            {featuredIsLoading ? (
                <Loading/>
            ) : (
                <div className="product-item-wrapper">
                    {
                        featured.map(({id, image, name, numReviews, rating, category}: Product) => (
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
            <div className="l-more-btn">
                {
                    featured?.length <= 3 &&
                    <button onClick={handleLoadMore}>Load More</button>
                }
            </div>
        </div>
    )
}
