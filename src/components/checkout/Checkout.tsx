import React, {FC} from "react";
import {Btn} from "../btn/Btn";


export const Checkout: FC = () => {
    return (
        <div className="checkout">
            <div>
                <p>Total</p> <p>${82.98}$</p>
            </div>

            <Btn text={"Continue to checkout"}/>
        </div>
    )
}