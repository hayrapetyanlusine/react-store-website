import {FC} from "react";
import { useCategories } from "../../../common/hooks/useCategories";
import {Loading} from "../../general/loading/Loading";
import {ProductItem} from "../../general/productItem/ProductItem";
import "./Categories.scss";
import {Category} from "../../../common/interfaces/category";
import {Link} from "react-router-dom";


export const Categories: FC = () => {
    const {data: categories, isLoading} = useCategories();

    return (
        <div className="categories-wrapper">
            {
                isLoading ? (
                    <Loading/>
                ) : (
                    <>
                        {categories.map(({_id, icon, name}: Category) => (
                            <Link to={`store/${_id}`} key={_id}>
                                <ProductItem key={_id} url={icon} name={name}/>
                            </Link>
                        ))}
                    </>
                )
            }
        </div>
    )
}