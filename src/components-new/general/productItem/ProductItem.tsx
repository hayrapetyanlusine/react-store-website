import React, {FC} from 'react';
import "./ProductItem.scss";

interface ProductItemProps {
    url: string,
    name: string
    price?: string
    rating?: string
}

export const ProductItem: FC<ProductItemProps> = ({url, name, price, rating}) => {
    return (
        <div className="product-item">
            <img src={url} alt="product"/>
            <h3>{name}</h3>
            {rating && <meter
                className="rating"
                min="0"
                max="5"
                value={rating}
                style={{'--percent': `${(+rating / 5) * 100}%`} as any}
            />}
            {price && <p className="p-price">{price}$</p>}
        </div>
    )
}