import { CategoryFilterContainer } from "../../components/categoryFilter/CategoryFilterContainer";
import {PremiumOffer} from "../../components/premiumOffer/PremiumOffer";
import {Search} from "../../components/search/Search";
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