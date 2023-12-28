import {FC} from "react";
import {NavLink} from "react-router-dom";
import "./Menu.scss";

interface MenuProps {
    isOpen: boolean
}

export const Menu: FC<MenuProps> = ({isOpen}) => {
    return (
        <nav id='nav' className={isOpen ? "open" : ""}>
            <NavLink to={"/"}>Home</NavLink>
            <NavLink to={"store"}>Store</NavLink>
            <NavLink to={"categories"}>Categories</NavLink>
            <NavLink to={"brand"}>Brand</NavLink>
            <NavLink to={"pages"}>Pages</NavLink>
            <NavLink to={"about-us"}>About Us</NavLink>
            <NavLink to={"news"}>News</NavLink>
            <NavLink to={"contact-us"}>Contact Us</NavLink>
        </nav>
    )
}