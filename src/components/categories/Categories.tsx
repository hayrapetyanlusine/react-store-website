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
                       {categories.map((category: Category) => (
                           <ProductItem key={category._id} url={category.icon} name={category.name} />
                       ))}
                   </>
               )
           }
       </div>
    )
}