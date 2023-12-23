import React, {FC} from "react";
import {SignUpForm} from "../../forms/sing-up-form/SignUpForm";
import "./SignUp.scss";

export const SignUp: FC = () => {
    return (
        <div className="sign-up container">
            <h2>Sign up</h2>
            <SignUpForm/>
        </div>
    )
}