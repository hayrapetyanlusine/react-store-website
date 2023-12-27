import React, { FC, useEffect, useState } from 'react';

interface CartItemProps {
    url: string;
    name: string;
    price: number;
    countInStock: number;
    quantity: number;
    id: string;
    onRemove: (itemId: string) => void;
}

export const CartItem: FC<CartItemProps> = ({ url, name, price, countInStock, quantity, id, onRemove }) => {
    const [count, setCount] = useState(quantity);
    const countArray = Array.from({ length: countInStock }, (_, index) => index + 1);

    useEffect(() => {
        const cartItems: CartItemProps[] = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const itemIndex = cartItems.findIndex((item) => item.id === id);

        if (itemIndex !== -1) {
            const updatedCartItems = [...cartItems];
            updatedCartItems[itemIndex].quantity = count;

            localStorage.setItem('cartItems', JSON.stringify(updatedCartItems));
        }
    }, [count, id]);

    return (
        <div className="cart-item">
            <img src={url} alt="img" />

            <div className="cart-item-desc">
                <div>
                    <h3>{name}</h3>
                    <p>{price}$</p>
                </div>

                <select value={count} onChange={(e) => setCount(Number(e.target.value))}>
                    {countArray.map((num) => (
                        <option key={num} value={num}>
                            {num}
                        </option>
                    ))}
                </select>
            </div>

            <button className="del-p-item-btn" onClick={() => onRemove(id)}> X </button>
        </div>
    );
};
