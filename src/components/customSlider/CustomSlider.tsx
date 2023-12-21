import {FC} from "react";
import "./CustomSlider.scss";
import {Btn} from "../btn/Btn";

export const CustomSlider:FC = () => {
    return (
        <div className="slider-wrapper">
            <div className="slider-item">
                <div className="s-img"></div>
                <div className="s-info">
                    <p>HOT DEALS THIS WEEK</p>
                    <h2>SALE 50% OFF <br/>MODERN FURNITURE</h2>
                    <Btn text={"VIEW NOW"}/>
                </div>
            </div>
        </div>
    )
}