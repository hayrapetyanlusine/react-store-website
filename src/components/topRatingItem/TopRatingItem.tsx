import React, {FC} from 'react';
import "./TopRatingItem.scss";

interface TopRatingItemProps {
    url: string,
    name: string,
    price: number
}

export const TopRatingItem: FC<TopRatingItemProps> = ({url, name, price}) => {
    return (
        <div className="rating-item">
            <img src={url} alt="img"/>
            <div className="r-item-desc">
                <h3>{name}</h3>
                <p>{price}$</p>
            </div>
        </div>
    )
}