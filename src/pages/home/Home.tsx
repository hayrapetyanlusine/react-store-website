import {NewsletterSignUp} from "../../components/newsletterSignUp/NewsletterSignUp";
import {PromotionalInfo} from "../../components/promotionalInfo/PromotionalInfo";
import {EleganceCorner} from "../../components/eleganceCorner/EleganceCorner";
import {CustomSlider} from "../../components/customSlider/CustomSlider";
import {NewPrices} from "../../components/newPrices/NewPrices";
import {slides} from "../../components/customSlider/SlideInfo";
import {Categories} from "../../components/categories/Categories";
import {Products} from "../../components/products/Products";
import {Search} from "../../components/search/Search";
import {FC} from "react";
import "./Home.scss";

export const Home: FC = () => {
    return (
        <div className="home-page">
            <Search/>
            <PromotionalInfo/>
            <CustomSlider slides={slides}/>
            <div className="container">
                <EleganceCorner/>
                <Categories/>
            </div>

            <NewPrices/>

            <div className="container">
                <Products/>
                <NewsletterSignUp/>
            </div>
        </div>
    )
}