import {FC, useState} from "react";
import "./Header.scss";
import {SubMenu} from "../subMenu/SubMenu";
import {Menu} from "../menu/Menu";

export const Header: FC = () => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <header id="header" className="container">
            <SubMenu toggleMenu={() => setIsOpen(!isOpen)} isOpen={isOpen}/>
            <Menu isOpen={isOpen}/>
        </header>
    )
}