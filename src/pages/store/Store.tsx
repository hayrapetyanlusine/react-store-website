import {CategoryFilterContainer} from "../../components-new/store/categoryFilter/CategoryFilterContainer";
import {PremiumOffer} from "../../components-new/store/premiumOffer/PremiumOffer";
import {Search} from "../../components-new/general/search/Search";
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