import React, {FC} from "react";
import {ErrorMessage, FastField, Field, Form, Formik, FormikHelpers} from "formik";
import {initialValues, InitialValues} from "./initialvalues";
import {validationSchema} from "./validationSchema";
import "./SignUpForm.scss";

const handleSubmit = (values: InitialValues, actions: FormikHelpers<InitialValues>): void => {
    console.log(JSON.stringify(values, null, 2));
};

export const SignUpForm: FC = () => {
    return (
        <Formik
            initialValues={initialValues}
            onSubmit={handleSubmit}
            validationSchema={validationSchema}
            initialErrors={true}
            validateOnChange={true}
        >
            {({resetForm}) =>
                <Form className="sign-up-form">
                    <FastField type="text" name="name" placeholder="Admin"/>
                    <ErrorMessage name={"name"} component="p"/>

                    <FastField type="email" name="email" placeholder="admin@admin.com"/>
                    <ErrorMessage name={"email"} component="p"/>

                    <FastField type="password" name="password" placeholder="password"/>
                    <ErrorMessage name={"password"} component="p"/>

                    <FastField type="tel" name="phone" placeholder="+947187520 "/>
                    <ErrorMessage name={"phone"} component="p"/>

                    <FastField type="text" name="street" placeholder="Main Street"/>
                    <ErrorMessage name={"street"} component="p"/>

                    <FastField type="text" name="city" placeholder="Colombo"/>
                    <ErrorMessage name={"city"} component="p"/>

                    <FastField type="text" name="country" placeholder="SriLanka"/>
                    <ErrorMessage name={"country"} component="p"/>

                    <label>
                        <Field type="checkbox" name="isadmin"/>
                        IsAdmin
                    </label>

                    <div className="btns">
                        <button type="submit" className="btn"> Sign up</button>
                        <button type="reset" className="reset-btn" onClick={() => resetForm}> Reset</button>
                    </div>
                </Form>
            }
        </Formik>
    )
}