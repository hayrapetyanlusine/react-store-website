import React, {FC} from "react";
import {Social} from "./Social";

export const FooterContact: FC = () => {
    return (
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
            <Social/>
        </div>
    )
}
