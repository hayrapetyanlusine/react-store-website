import React, {FC} from "react";
import "./SingleProduct.scss";
import {AddToCart} from "../addToCart/AddToCart";
import {useParams} from "react-router-dom";
import {useProducts} from "../../../common/hooks/useProducts";
import {useFilteredProducts} from "../../../common/hooks/useFilterdProducts";
import {Slider} from "../../sliders/slider/Slider";
import {useNavigate} from "react-router";

interface SingleProductProps {
    url: string,
    name: string,
    price: string,
    images: string[],
    description: string,
    countInStock: string,
    id: string
}

export const SingleProduct: FC<SingleProductProps> = ({url, name, price, images, description, countInStock, id}) => {
    const {productId} = useParams();
    const {data: products} = useProducts();
    const filteredProducts = useFilteredProducts(products, productId);
    const navigate = useNavigate();

    function addToCart(count: number): void {
        const existingCartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
        const existingCartItem = existingCartItems.find((item: any) => item.productId === productId);

        existingCartItem
            ? existingCartItem.quantity += count
            : existingCartItems.push({url, productId, name, price, quantity: count, countInStock, id});

        localStorage.setItem('cartItems', JSON.stringify(existingCartItems));

        navigate("/cart");
    }

    return (
        <>
            <div className="product-item-description container">
                <div className="p-images">
                    {
                        images.length > 0 && (
                            <>
                                {JSON.parse(images[0]).map((url: string) => (
                                    <img key={Math.random()} src={url} alt="img"/>
                                ))}
                            </>
                        )
                    }

                    <img src={url} className="main-img"/>

                    <div className="product-detail">
                        <p className="p-title">Details</p>
                        <p>{description}</p>
                    </div>
                </div>

                <div className="product-item-description-text">
                    <h2>{name}</h2>
                    <p>{price}$</p>
                    <img src={url} className="small-image"/>
                    <AddToCart countInStock={countInStock} addToCart={addToCart}/>
                </div>
            </div>

            {filteredProducts.length >= 5 &&
                <div className="container">
                    <Slider slides={filteredProducts}/>
                </div>
            }
        </>
    )
}