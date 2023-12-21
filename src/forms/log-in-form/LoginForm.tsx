import React, {FC} from "react";
import {ErrorMessage, FastField, Form, Formik, FormikHelpers} from "formik";
import {InitialValues, initialValues} from "./initialValues";
import {validationSchema} from "./validationSchema";
import "./loginForm.scss";

const handleSubmit = (values: InitialValues, actions: FormikHelpers<InitialValues>): void => {
    console.log(JSON.stringify(values, null, 2));
};

export const LogInForm: FC = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            initialErrors={true}
            validateOnChange={true}
        >
            {({resetForm}) =>
                <Form className='login-form'>
                    <FastField type="text" name="name" placeholder="Admin"/>
                    <ErrorMessage name={"name"} component="p"/>

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