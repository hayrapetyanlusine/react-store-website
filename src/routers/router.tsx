import App from "../App";
import React from "react";
import {Error} from "../pages/error/Error";
import {Home} from "../pages/home/Home";
import {Store} from "../pages/store/Store";
import {Cart} from "../pages/cart/Cart";
import { LogIn } from "../pages/log-in/LogIn";
import { SignUp } from "../pages/sign-up/SignUp";
import {DetailViewProduct} from "../pages/detailViewProduct/DetailViewProduct";
import {Orders} from "../pages/orders/Order";
import {PrivateRouteForUser} from "./protectedRoute";

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
                path: "store/:id",
                element: <Store />
            },
            {
                path: "store/:id/:productId",
                element: <DetailViewProduct />
            },
            {
                path: "categories",
                element: <h2>Categories</h2>
            },
            {
                path: "brand",
                element: <h2>Brand</h2>
            },
            {
                path: "pages",
                element: <h2>Pages</h2>
            },
            {
                path: "about-us",
                element: <h2>About us</h2>
            },
            {
                path: "news",
                element: <h2>News</h2>
            },
            {
                path: "contact-us",
                element: <h2>Contact us</h2>
            },
            {
                path: "log-in",
                element: (
                    <PrivateRouteForUser>
                        <LogIn />
                    </PrivateRouteForUser>
                )
            },
            {
                path: "sign-up",
                element: <SignUp />
            },
            {
                path: "cart",
                element: <Cart/>
            },
            {
                path: "/orders",
                element: <Orders/>
            }
        ],
    }
];