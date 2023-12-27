import React, {FC, useEffect, useState} from "react";
import "./CartItems.scss";
import {CartItem} from "./CartItem";
import {InCartItem} from "../../common/interfaces/cartItem";
import {Checkout} from "../checkout/Checkout";

export const CartItems: FC = () => {
    const [cartItems, setCartItems] = useState<any[]>([]);

    useEffect(() => {
        const storedCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        setCartItems(storedCartItems);
    }, [setCartItems]);

    const handleRemoveItem = (itemId: string) => {
        const updatedCartItems = cartItems.filter((item) => item.id !== itemId);
        localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        setCartItems(updatedCartItems);
    };

    const total = cartItems.reduce((acc, item) => {
        const validQuantity: number = Math.max(item.quantity, 1);
        return acc + item.price * validQuantity;
    }, 0);

    return (
        <>
            <div className="cart-items">
                {cartItems.map(({productId, url, name, price, countInStock, quantity, id}: InCartItem) => (
                    <CartItem
                        key={productId}
                        url={url}
                        name={name}
                        price={price}
                        countInStock={countInStock}
                        quantity={quantity}
                        id={id}
                        onRemove={handleRemoveItem}
                    />
                ))}

                <div className="total">
                    <p>Total</p>
                    <hr/>
                    <p>{total} $</p>
                </div>
            </div>

            <Checkout total={total}/>
        </>
    )
}