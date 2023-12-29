import React, {FC} from "react";
import "./Checkout.scss";
import {useNavigate} from "react-router";
import {useCreateOrder} from "../../../common/hooks/useCreateOrder";
import {CheckoutData} from "../../../common/interfaces/checkoutData";

interface CheckoutProps {
    total: number,
    onCheckout: () => void
}

export const Checkout: FC<CheckoutProps> = ({total, onCheckout}) => {
    const isUserAuth: string | null = localStorage.getItem("token");
    const navigate = useNavigate();
    const data = localStorage.getItem("cartItems");
    const {orders: createOrder} = useCreateOrder();

    function handleCheckout() {
        if (isUserAuth && data) {
            const dataArr = JSON.parse(data).map(({quantity, id: product}: CheckoutData) => ({quantity, product}));

            createOrder(dataArr);
            onCheckout();
        } else {
            navigate("/log-in");
        }
    }

    return (
        <div className="checkout">
            <div className="checkout-text">
                <p>Order value: <span>{total}$</span></p>
                <p>Shipping: <span>0.0$</span></p>
                <p>Total <span>{total}$</span></p>
            </div>

            <button onClick={handleCheckout}>Continue to checkout</button>
        </div>
    )
}