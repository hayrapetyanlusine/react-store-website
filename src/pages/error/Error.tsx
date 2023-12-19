import {useRouteError} from 'react-router-dom';
import React, {FC} from 'react';
import "./Error.scss";

interface RouteError {
    statusText: string;
    message: string;
}

export const Error: FC = () => {
    const error = useRouteError() as RouteError;

    return (
        <div className="error">
            <h1>Oops!</h1>
            <p>Sorry, an unexpected error has occurred.</p>
            <p>
                <i>{error.statusText || error.message}</i>
            </p>
        </div>
    )
}