import React, {FC} from 'react';
import "./TopRatingItem.scss";

interface TopRatingItemProps {
    url: string,
    name: string,
    price: number,
    rating: string
}

export const TopRatingItem: FC<TopRatingItemProps> = ({url, name, price, rating}) => {
    return (
        <div className="rating-item">
            <img src={url} alt="img"/>
            <div className="r-item-desc">
                <h3>{name}</h3>
                <meter
                    className="rating"
                    min="0"
                    max="5"
                    value={rating}
                    style={{'--percent': `${(+rating / 5) * 100}%`} as any}
                />
                <p>{price}$</p>
            </div>
        </div>
    )
}