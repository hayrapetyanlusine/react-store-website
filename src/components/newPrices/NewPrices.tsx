import React, {FC} from 'react';
import "./NewPrices.scss";
import {Btn} from "../btn/Btn";

export const NewPrices: FC = () => {
    return (
        <div className="new-price">
            <div className="new-price-content">
                <h2>BEDSHEET SETS</h2>
                <div className="prices">
                    <h3>$50.00</h3>
                    <del>$220.00</del>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
                <Btn text={"VIEW DETAILS"}/>
            </div>
        </div>
    )
}