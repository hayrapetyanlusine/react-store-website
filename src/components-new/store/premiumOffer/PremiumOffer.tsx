import React, {FC} from 'react';
import "./PremiumOffer.scss";

export const PremiumOffer: FC = () => {
    return (
        <div className="premium-offer">
            <div className="premium-offer-info">
                <h3>Premium Member Exclusive</h3>
                <p>15% OFF EVERYTHING + EXTRA gift card & coupon Offers </p>
                <p className="small-text">NOT A MEMBER? JOIN NOW TO SHOP.</p>
            </div>
        </div>
    )
}