import React, {FC} from "react";
import {ErrorMessage, FastField, Form, Formik} from "formik";
import {InitialValues, initialValues} from "./initialValues";
import {validationSchema} from "./validationSchema";
import {useLoginUser} from "../../common/hooks/useLogInUser";
import {useQueryClient} from "react-query";
import {useNavigate} from "react-router";
import "./loginForm.scss";


export const LogInForm: FC = () => {
    const {logInUser} = useLoginUser();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    function handleLogIn(values: InitialValues): void {
        logInUser(values, {
            onSuccess: (): void => {
                navigate('/');
                queryClient.invalidateQueries('');
            },
            onError: (): void => {
                console.log('login error');
            }
        })
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: InitialValues) => handleLogIn(values)}
            validationSchema={validationSchema}
            initialErrors={true}
            validateOnChange={true}
        >
            {({resetForm}) =>
                <Form className='login-form'>
                    <FastField type="email" name="email" placeholder="email"/>
                    <ErrorMessage name={"email"} component="p"/>

                    <FastField type="password" name="password" placeholder="password"/>
                    <ErrorMessage name={"password"} component="p"/>

                    <div className="btns">
                        <button type="submit" className="log-btn"> Log in</button>
                        <button type="reset" className="login-reset-btn" onClick={() => resetForm}> Reset</button>
                    </div>
                </Form>
            }
        </Formik>
    )
}