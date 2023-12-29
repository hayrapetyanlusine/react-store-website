import React, {FC} from "react";
import {Slider} from "../../components/sliders/slider/Slider";
import {CartItems} from "../../components/cart/cartItems/CartItems";
import "./Cart.scss";
import {useFeatured} from "../../common/hooks/useFeatured";
import {Loading} from "../../components/general/loading/Loading";

export const Cart: FC = () => {
    const {data: featured, isLoading: featuredIsLoading} = useFeatured();

    return (
        <div className="shopping-cart-container container">
            <h1 className="page-name">Shopping cart</h1>
            <div className="cart-info-container">
                <CartItems/>
            </div>
            {
                featuredIsLoading ? (
                    <Loading/>
                ) : (
                    <Slider slides={featured}/>
                )
            }
        </div>
    )
}