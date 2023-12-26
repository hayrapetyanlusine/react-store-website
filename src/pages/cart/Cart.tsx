import React, {FC} from "react";
import {useProducts} from "../../common/hooks/useProducts";
import {Slider} from "../../components/slider/Slider";
import {Checkout} from "../../components/checkout/Checkout";

export const Cart: FC = () => {
    const {data: products} = useProducts();
    const isFeatured = products?.filter((product: any) => product.isFeatured);

    return (
        <div className="container">
            <h1>Shopping cart</h1>
            <Checkout/>
            <Slider slides={isFeatured}/>
        </div>
    )
}