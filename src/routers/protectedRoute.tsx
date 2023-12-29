import { Navigate } from "react-router-dom";
import { FC } from "react";

interface ProtectedRouteProps {
    children: any
}

export const PrivateRouteForUser:FC<ProtectedRouteProps> = ({ children }) => {
    const isUserAuth: string | null = localStorage.getItem("token");

    if (isUserAuth) {
        return <Navigate to={"/"} />;
    }

    return children;
};