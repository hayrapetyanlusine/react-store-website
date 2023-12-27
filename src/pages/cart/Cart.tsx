import React, {FC, useEffect, useState} from "react";
import {useProducts} from "../../common/hooks/useProducts";
import {Slider} from "../../components-new/sliders/slider/Slider";
import {CartItems} from "../../components-new/cart/cartItems/CartItems";
import "./Cart.scss";

export const Cart: FC = () => {
    const {data: products} = useProducts();
    const [featured, setIsFeatured] = useState([]);

    useEffect(() => {
        if(products) {
            const isFeatured = products.filter((product: any) => product.isFeatured);
            setIsFeatured(isFeatured);
        }
    }, [products, setIsFeatured]);

    return (
        <div className="shopping-cart-container container">
            <h1 className="page-name">Shopping cart</h1>
            <div className="cart-info-container">
                <CartItems/>
            </div>
            <Slider slides={featured}/>
        </div>
    )
}