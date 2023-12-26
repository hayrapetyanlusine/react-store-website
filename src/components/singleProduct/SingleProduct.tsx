import React, {FC, useEffect, useState} from "react";
import "./SingleProduct.scss";
import {AddToCart} from "../addToCart/AddToCart";
import {useParams} from "react-router-dom";
import {useProducts} from "../../common/hooks/useProducts";
import {useFilteredProducts} from "../../common/hooks/useFilterdProducts";
import {Slider} from "../slider/Slider";

interface SingleProductProps {
    url: string,
    name: string,
    price: string,
    images: string[],
    description: string
}

export const SingleProduct: FC<SingleProductProps> = ({url, name, price, images, description}) => {
    const {productId} = useParams();
    const {data: products, isLoading: isProductLoading} = useProducts();
    const filteredProducts = useFilteredProducts(products, productId);

    return (
        <>
            <div className="product-item-description container">
                <div className="p-images">
                    <img src={url}/>
                    <img src={url}/>

                    <div className="product-ditail">
                        <p className="p-title">Details</p>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="product-item-description-text">
                    <h2>{name}</h2>
                    <p>{price}$</p>
                    <img src={url} className="small-image"/>
                    <AddToCart/>
                </div>
            </div>

            {filteredProducts.length >= 5 &&
                <div className="container">
                    <Slider slides={filteredProducts}/>
                </div>}
        </>
    )
}