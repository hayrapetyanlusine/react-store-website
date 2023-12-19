import React, {FC} from 'react';
import "./Footer.scss";
import {FooterLinkItem} from "./FooterLinkItems";
import {FooterContact} from "./FooterContact";
import {FooterUpdates} from "./FooterUpdates";

const footerInfo = [
    {
        title: "SHOPPING",
        pagesNames: ["Your cart", "Your orders", "Compared items", "Wishlist items", "Shipping detail"],
    },
    {
        title: "MORE LINK",
        pagesNames: ["Blog", "Gift Center", "Buying Guides", "New Arrivals", "Clearance"],
    }
];

export const Footer: FC = () => {
    return (
        <>
            <footer id="footer">
                <div className="footer-content-wrapper">
                    <FooterContact/>

                    <div className="f-linkes">
                        {
                            footerInfo.map(({title, pagesNames}) => (
                                <FooterLinkItem key={title} title={title} pagesNames={pagesNames}/>
                            ))
                        }
                    </div>

                    <FooterUpdates/>
                </div>
            </footer>
            <div className="brand-copyright">Brand Registered Name © – All rights reserved</div>
        </>
    )
}