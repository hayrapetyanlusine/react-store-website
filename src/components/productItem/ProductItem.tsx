import React, {FC} from 'react';
import "./ProductItem.scss";

interface ProductItemProps {
    url: string,
    name: string
    price?: number
}

export const ProductItem: FC<ProductItemProps> = ({url, name, price}) => {
    return (
        <div className="product-item">
            <img src={url} alt="product"/>
            <h3>{name}</h3>
            {price && <p className="p-price">{price}$</p>}
        </div>
    )
}