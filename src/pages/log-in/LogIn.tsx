import {LogInForm} from "../../forms/log-in-form/LoginForm";
import React, {FC} from "react";
import {Link} from "react-router-dom";
import "./LogIn.scss";

export const LogIn: FC = () => {
    return (
        <div className="log-in container">
            <h2>Welcome!</h2>
            <LogInForm />

            <div className="account-sign-up">
                <p>
                    Don't have an account?
                    <Link to="/sign-up">
                        <span> Sign up </span>
                    </Link>
                </p>
            </div>
        </div>
    )
}