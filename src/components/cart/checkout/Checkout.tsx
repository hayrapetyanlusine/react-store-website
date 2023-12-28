import React, {FC} from "react";
import "./Checkout.scss";
import {useUserAuth} from "../../../common/hooks/useUserAuth";
import {useNavigate} from "react-router";

interface CheckoutProps {
    total: number
}

export const Checkout: FC<CheckoutProps> = ({total}) => {
    const {isUserAuth} = useUserAuth();
    const navigate = useNavigate();

    function handleCheckout () {
        if(isUserAuth) {

        }

        navigate("log-in");
    }

    return (
        <div className="checkout">
            <div className="checkout-text">
                <p>Order value: <span>{total}$</span> </p>
                <p>Shipping: <span>0.0$</span> </p>
                <p>Total <span>{total}$</span></p>
            </div>

            <button onClick={handleCheckout}>Continue to checkout</button>
        </div>
    )
}