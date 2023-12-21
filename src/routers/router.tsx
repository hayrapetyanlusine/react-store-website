import App from "../App";
import React from "react";
import {Error} from "../pages/error/Error";
import {Home} from "../pages/home/Home";
import {Store} from "../pages/store/Store";
import {Brand} from "../pages/brand/Brand";
import {Pages} from "../pages/pages/Pages";
import {AboutUs} from "../pages/about-us/AboutUs";
import {News} from "../pages/news/News";
import {ContactUs} from "../pages/contact-us/ContactUs";
import {Categories} from "../pages/categories/Categories";
import {SignUp} from "../pages/sign-up/SignUp";
import {Cart} from "../pages/cart/Cart";

export const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                index: true,
                element: <Home/>
            },
            {
                path: "store",
                element: <Store />
            },
            {
                path: "categories",
                element: <Categories/>
            },
            {
                path: "brand",
                element: <Brand />
            },
            {
                path: "pages",
                element: <Pages />
            },
            {
                path: "about-us",
                element: <AboutUs />
            },
            {
                path: "news",
                element: <News />
            },
            {
                path: "contact-us",
                element: <ContactUs />
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "cart",
                element: <Cart/>
            }
        ],
    }
];