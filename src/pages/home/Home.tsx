import {FC} from "react";
import {Search} from "../../components/search/Search";
import {PromotionalInfo} from "../../components/promotionalInfo/PromotionalInfo";
import {NewPrices} from "../../components/newPrices/NewPrices";
import {NewsletterSignUp} from "../../components/newsletterSignUp/NewsletterSignUp";
import {EleganceCorner} from "../../components/eleganceCorner/EleganceCorner";
import "./Home.scss";
import {CustomSlider} from "../../components/customSlider/CustomSlider";
import { slides } from "../../components/customSlider/SlideInfo";
import {Categories} from "../../components/categories/Categories";
import {Products} from "../../components/products/Products";

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