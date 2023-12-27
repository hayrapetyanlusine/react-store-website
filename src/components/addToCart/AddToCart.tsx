import React, {FC, useState} from "react";
import "./AddToCart.scss";

interface AddToCartProps {
    countInStock: string;
    addToCart: (count: number) => void;
}

export const AddToCart: FC<AddToCartProps> = ({countInStock, addToCart}) => {
    const [count, setCount] = useState("");

    const countArray: number[] = Array.from({length: +countInStock}, (_, index) => index + 1);

    return (
        <div className="add-to-cart">
            <select value={count} onChange={(e) => setCount(e.target.value)}>
                <option value="" disabled hidden> Count</option>
                {countArray.map((num) => (
                    <option key={num} value={num}> {num} </option>
                ))}
            </select>
            <button onClick={() => addToCart(+count)}>Add to cart</button>
        </div>
    );
};
