import {FC} from "react";
import {Search} from "../../components/search/Search";
import {PromotionalInfo} from "../../components/promotionalInfo/PromotionalInfo";
import {NewPrices} from "../../components/newPrices/NewPrices";
import {NewsletterSignUp} from "../../components/newsletterSignUp/NewsletterSignUp";
import "./Home.scss";

export const Home: FC = () => {
    return (
        <div className="home-page">
            <Search/>
            <PromotionalInfo/>
            <NewPrices/>
            <div className="container">
                <NewsletterSignUp/>
            </div>
        </div>
    )
}