import React, {FC} from "react";
import {Btn} from "../btn/Btn";
import "./Checkout.scss";

interface CheckoutProps {
    total: number
}

export const Checkout: FC<CheckoutProps> = ({total}) => {
    return (
        <div className="checkout">
            <div className="checkout-text">
                <p>Order value: <span>{total}$</span> </p>
                <p>Shipping: <span>0.0$</span> </p>
                <p>Total <span>{total}$</span></p>
            </div>

            <Btn text={"Continue to checkout"}/>
        </div>
    )
}