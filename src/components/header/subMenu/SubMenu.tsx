import {FC} from "react";
import "./SubMenu.scss";
import {useNavigate} from "react-router-dom";
import {userAuth, useUserAuth} from "../../../common/hooks/useUserAuth";
import {useAtom} from "jotai";

interface SubMenuProp {
    isOpen: boolean;
    toggleMenu: () => void;
}

export const SubMenu: FC<SubMenuProp> = ({toggleMenu, isOpen}) => {
    const navigate = useNavigate();
    // const {isUserAuth} = useUserAuth();
    const [isUserAuth] = useAtom(userAuth);

    const handleNavigateLogIn = () => navigate("log-in");
    const handleNavigateBasket = () => navigate("cart");
    const handleNavigateOrders = () => navigate("orders");


    return (
        <div className="sub-menu">
            <div className="brand">
                <img src={`/assets/images/logo.png`} alt="logo"/>
                <h2>BRAND NAME</h2>
            </div>

            <div className="sub-nav-container">
                {
                    isUserAuth &&
                    <img src={`/assets/images/c-login.jpg`} alt="login-user" onClick={handleNavigateOrders}/>
                }
                <img src={`/assets/images/user.png`} alt="user" onClick={handleNavigateLogIn}/>
                <img src={`/assets/images/basket.png`} alt="basket" onClick={handleNavigateBasket}/>
                <div className={isOpen ? "burger-menu open" : "burger-menu"} onClick={toggleMenu}> <span></span> </div>
            </div>
        </div>
    )
}