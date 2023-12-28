import {CategoryFilterContainer} from "../../components/store/categoryFilter/CategoryFilterContainer";
import {PremiumOffer} from "../../components/store/premiumOffer/PremiumOffer";
import {Search} from "../../components/general/search/Search";
import {FC} from "react";
import "./Store.scss";

export const Store: FC = () => {
    return (
        <div className="store-page">
            <Search/>
            <PremiumOffer/>
            <CategoryFilterContainer/>
        </div>
    )
}