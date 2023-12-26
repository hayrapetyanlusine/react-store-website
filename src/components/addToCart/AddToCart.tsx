import React, {FC, useState} from "react";
import "./AddToCart.scss";

export const AddToCart: FC = () => {
    const [count, setCount] = useState("");

    function handleAddToCart () {
        console.log(1);
    }

    return (
        <div className="add-to-cart">
            <input
                type="text"
                name="count"
                placeholder="Count"
                value={count}
                onChange={(e) => setCount(e.target.value)}
            />
            <button onClick={handleAddToCart}>Add to cart</button>
        </div>
    )
}