import {Search} from "../../components-new/general/search/Search";
import {PromotionalInfo} from "../../components-new/home/promotionalInfo/PromotionalInfo";
import {CustomSlider} from "../../components-new/sliders/customSlider/CustomSlider";
import {slides} from "../../components-new/sliders/customSlider/SlideInfo";
import {EleganceCorner} from "../../components-new/home/eleganceCorner/EleganceCorner";
import {Categories} from "../../components-new/home/categories/Categories";
import {NewPrices} from "../../components-new/home/newPrices/NewPrices";
import {NewsletterSignUp} from "../../components-new/home/newsletterSignUp/NewsletterSignUp";
import {TopRatingProducts} from "../../components-new/home/topRatingProducts/TopRatingProducts";
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