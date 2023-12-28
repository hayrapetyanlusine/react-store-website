import { Navigate } from "react-router-dom";
import {useUserAuth} from "../common/hooks/useUserAuth";
import { FC } from "react";

interface ProtectedRouteProps {
    children: any
}

export const PrivateRouteForUser:FC<ProtectedRouteProps> = ({ children }) => {
    const {isUserAuth} = useUserAuth();

    if (isUserAuth) {
        return <Navigate to={"/"} />;
    }

    return children;
};