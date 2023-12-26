import React, {FC} from "react";
import "./ShoppingCartItem.scss";

interface ShoppingCartItemProps {
    image: string,
    name: string,
    price: string
}

export const ShoppingCartItem:FC<ShoppingCartItemProps> = ({image, name, price}) => {
    return (
        <div className="shopping-cart-item">
            <img src={image} alt="img"/>
            <div className="cart-item-desc">
                <p>{name}</p>
                <p>{price}</p>
            </div>
        </div>
    )
}