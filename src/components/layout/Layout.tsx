import React, {FC} from "react";
import {Header} from "../header/Header";
import {Outlet} from "react-router-dom";
import {Footer} from "../footer/Footer";


export const Layout: FC = () => {
    return (
        <>
            <Header/>

            <Outlet/>

            <Footer/>
        </>
    )
}