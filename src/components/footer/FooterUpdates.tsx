import React, { FC } from 'react';

export const FooterUpdates: FC = () => {
    return (
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
    )
}