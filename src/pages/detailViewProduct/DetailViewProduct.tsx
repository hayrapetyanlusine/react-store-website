import React, {FC} from "react";
import {useParams} from "react-router-dom";
import {useProductById} from "../../common/hooks/useProductById";
import {Loading} from "../../components/loading/Loading";

export const DetailViewProduct: FC = () => {
    const {id, productId} = useParams();
    const {data: product, isLoading} = useProductById(id);

    return (
        <div>
            {
                isLoading ? (
                    <Loading/>
                ) : (
                    <h1>{product.name}</h1>
                )
            }
        </div>
    )
}