import React, {FC} from "react";
import {Social} from "./Social";

export const FooterContact: FC = () => {
    return (
        <div className="content-item">
            <h2>BRAND NAME</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor.</p>
            <p>121 king street, Melbourne 3000</p>
            <p>+12 3 0000 0000</p>
            <p>contact@brandemail.com</p>
            <Social/>
        </div>
    )
}
