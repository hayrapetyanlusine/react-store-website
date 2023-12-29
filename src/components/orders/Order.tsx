import {FC} from "react";
import "./Order.scss";

interface OrderProps {
    image: string,
    name: string,
    price: string
}

export const Order: FC<OrderProps> = ({image, name, price}) => {
    return (
        <div className="order">
            <img src={image} alt="img"/>
            <div className="order-desc">
                <p>{name}</p>
                <p>{price}$</p>
            </div>
        </div>
    )
}