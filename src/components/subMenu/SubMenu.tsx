import {FC} from "react";
import "./SubMenu.scss";

interface SubMenuProp {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const SubMenu: FC<SubMenuProp> = ({toggleMenu, isOpen}) => {
    return (
        <div className="sub-menu">
            <div className="brand">
                <img src={`/assets/images/logo.png`} alt="logo"/>
                <h2>BRAND NAME</h2>
            </div>

            <div className="sub-nav-container">
                <img src={`/assets/images/user.png`} alt="user"/>
                <img src={`/assets/images/basket.png`} alt="basket"/>
                <div className={isOpen ? "burger-menu open" : "burger-menu"} onClick={toggleMenu}> <span></span> </div>
            </div>
        </div>
    )
}