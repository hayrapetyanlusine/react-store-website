import React, {FC} from "react";
import {useParams} from "react-router-dom";
import {useProductById} from "../../common/hooks/useProductById";
import {Loading} from "../../components/loading/Loading";
import {SingleProduct} from "../../components/singleProduct/SingleProduct";

export const DetailViewProduct: FC = () => {
    const {id, productId} = useParams();
    const {data: product, isLoading} = useProductById(id);

    return (
        <>
            {
                isLoading ? (
                    <Loading/>
                ) : (
                    <SingleProduct
                        url={product.image}
                        name={product.name}
                        price={product.price}
                        images={product.images}
                        description={product.description}
                    />
                )
            }
        </>
    )
}