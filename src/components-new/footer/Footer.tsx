import React, { FC } from 'react';
import "./Footer.scss";
import { Social } from './Social';

export const Footer: FC = () => {
    return (
        <>
            <footer id="footer">
                <div className="footer-content-wrapper">
                    <div className="content-item c-gap">
                        <h2 className="brend-name">BRAND NAME</h2>
                        <p className="f-desc">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.
                        </p>
                        <div className="footer-contact-info">
                            <p>121 king street, Melbourne 3000</p>
                            <p>+12 3 0000 0000</p>
                            <p>contact@brandemail.com</p>
                        </div>
                        <Social />
                    </div>

                    <div className="f-linkes">
                        <div className="content-item">
                            <h2 className='f-title'>SHOPPING</h2>
                            <p className="f-name">Your cart</p>
                            <p className="f-name">Your orders</p>
                            <p className="f-name">Compared items</p>
                            <p className="f-name">Wishlist items</p>
                            <p className="f-name">Shipping detail</p>
                        </div>
                        <div className="content-item">
                            <h2 className='f-title'>MORE LINK</h2>
                            <p className="f-name">Blog</p>
                            <p className="f-name">Gift Center</p>
                            <p className="f-name">Buying Guides</p>
                            <p className="f-name">New Arrivals</p>
                            <p className="f-name">Clearance</p>
                        </div>
                    </div>

                    <div className="content-item c-gap">
                        <div className="item-info">
                            <h2 className="f-title">PROMO UPDATE</h2>
                            <h3><span>14</span>May</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="f-comment">3 comments</p>
                        </div>

                        <hr />

                        <div className="item-info">
                            <h3><span>15</span>July</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                            <p className="f-comment">3 comments</p>
                        </div>
                    </div>
                </div>
            </footer>
            <div className="brand-copyright">Brand Registered Name © – All rights reserved</div>
        </>
    )
}