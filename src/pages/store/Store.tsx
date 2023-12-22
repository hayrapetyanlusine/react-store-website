import {FC} from "react";
import {PremiumOffer} from "../../components/premiumOffer/PremiumOffer";
import {Search} from "../../components/search/Search";
import "./Store.scss";
import {useCategories} from "../../common/hooks/useCategories";
import {Category} from "../../common/interfaces/category";

export const Store: FC = () => {
    // const { data: categories, isLoading } = useCategories();
    // const categoriesNames = () => categories.map((category: Category) => category.name);

    return (
        <div className="store-page">
            <Search/>
            <PremiumOffer/>

            <div className="category-filter-container">
                <div className="category-names">

                </div>
                <div className="item-lists">

                </div>
            </div>
        </div>
    )
}