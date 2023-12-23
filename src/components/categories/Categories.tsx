import {FC} from "react";
import {useCategories} from "../../common/hooks/useCategories";
import {Loading} from "../loading/Loading";
import {ProductItem} from "../productItem/ProductItem";
import "./Categories.scss";
import {Category} from "../../common/interfaces/category";


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
                            <ProductItem key={_id} url={icon} name={name}/>
                        ))}
                    </>
                )
            }
        </div>
    )
}