import {FC} from "react";
import {PremiumOffer} from "../../components/premiumOffer/PremiumOffer";
import {Search} from "../../components/search/Search";
import "./Store.scss";
import {useCategories} from "../../common/hooks/useCategories";
import {Category} from "../../common/interfaces/category";
import {Slider} from "../../components/slider/Slider";
import {Loading} from "../../components/loading/Loading";

const categoryFilterContainer = {
    display: "flex",
}

const categoryNames = {
    maxWidth: "300px",
    width: "100%"
}

export const Store: FC = () => {
    const { data: categories, isLoading: isCategoriesLoading } = useCategories();
    // const categoriesNames = () => categories.map((category: Category) => category.name);

    return (
        <div className="store-page">
            <Search/>
            <PremiumOffer/>

            <div className="category-filter-container" style={categoryFilterContainer}>
                <div className="category-names">
                    <h2>Categories</h2>

                    {
                        isCategoriesLoading ? (
                            <Loading/>
                        ) : (
                            //
                            categories.map((category?: any) => {
                                return <p key={category._id}> {category.name} </p>
                            })
                        )
                    }
                </div>
                <div className="item-lists" style={{width: "1100px", border: "2px solid red"}}>

                </div>
            </div>
        </div>
    )
}