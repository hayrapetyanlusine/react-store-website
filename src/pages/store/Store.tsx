import {FC} from "react";
import {PremiumOffer} from "../../components/premiumOffer/PremiumOffer";
import {Search} from "../../components/search/Search";
import "./Store.scss";

export const Store: FC = () => {
    return (
        <div className="store-page">
            <Search/>
            <PremiumOffer/>
        </div>
    )
}