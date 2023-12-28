import {Search} from "../../components/general/search/Search";
import {PromotionalInfo} from "../../components/home/promotionalInfo/PromotionalInfo";
import {CustomSlider} from "../../components/sliders/customSlider/CustomSlider";
import {slides} from "../../components/sliders/customSlider/SlideInfo";
import {EleganceCorner} from "../../components/home/eleganceCorner/EleganceCorner";
import {Categories} from "../../components/home/categories/Categories";
import {NewPrices} from "../../components/home/newPrices/NewPrices";
import {NewsletterSignUp} from "../../components/home/newsletterSignUp/NewsletterSignUp";
import {TopRatingProducts} from "../../components/home/topRatingProducts/TopRatingProducts";
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
                <TopRatingProducts/>
                <NewsletterSignUp/>
            </div>
        </div>
    )
}