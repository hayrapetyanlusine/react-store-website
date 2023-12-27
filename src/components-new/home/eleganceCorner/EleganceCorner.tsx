import React, {FC} from "react";
import "./EleganceCorner.scss";

export const EleganceCorner: FC = () => {
    return (
        <div className="elegance-corner-wrapper">
            <div className="e-c-item">
                <img src={`/assets/images/e-corner-1.png`} alt="img"/>
                <h3>INY VINTAGE CHAIR</h3>
            </div>
            <div className="e-c-item two">
                <img src={`/assets/images/e-corner-2.png`} alt="img"/>
                <h3>LARGE TERRACOTA <br/> VASE</h3>
            </div>
        </div>
    )
};