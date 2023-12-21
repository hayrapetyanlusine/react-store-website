import {FC} from "react";
import {Search} from "../../components/search/Search";
import {PromotionalInfo} from "../../components/promotionalInfo/PromotionalInfo";
import {NewPrices} from "../../components/newPrices/NewPrices";
import {NewsletterSignUp} from "../../components/newsletterSignUp/NewsletterSignUp";
import {EleganceCorner} from "../../components/eleganceCorner/EleganceCorner";
import "./Home.scss";
import {CustomSlider} from "../../components/customSlider/CustomSlider";

export const Home: FC = () => {
    return (
        <div className="home-page">
            <Search/>
            <PromotionalInfo/>
            <CustomSlider/>
            <NewPrices/>
            <div className="container">
                <EleganceCorner/>
                <NewsletterSignUp/>
            </div>
        </div>
    )
}