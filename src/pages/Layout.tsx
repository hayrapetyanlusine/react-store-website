import React, {FC} from "react";
import {Outlet} from "react-router-dom";
import {Header} from "../components-new/header/Header";
import {Footer} from "../components-new/footer/Footer";


export const Layout: FC = () => {
    return (
        <>
            <Header/>

            <Outlet/>

            <Footer/>
        </>
    )
}