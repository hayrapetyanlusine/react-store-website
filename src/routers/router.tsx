import App from "../App";
import React from "react";
import {Error} from "../pages/error/Error";

export const routes = [
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [],
    }
];