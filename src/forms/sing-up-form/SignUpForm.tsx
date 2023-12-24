import React, {FC} from "react";
import {ErrorMessage, FastField, Field, Form, Formik} from "formik";
import {initialValues, InitialValues} from "./initialvalues";
import {validationSchema} from "./validationSchema";
import { useRegistration } from "../../common/hooks/useRegistration";
import {useQueryClient} from "react-query";
import {useNavigate} from "react-router";
import "./SignUpForm.scss";


export const SignUpForm: FC = () => {
    const {registerUser} = useRegistration();
    const queryClient = useQueryClient();
    const navigate = useNavigate();

    function handleRegister(values: InitialValues) {
        registerUser(values, {
            onSuccess: () => {
                navigate('/log-in');
                queryClient.invalidateQueries('');
            },
            onError: () => {
                console.log('error');
            }
        })
    }

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={(values: InitialValues) => handleRegister(values)}
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

                    <Field name="zip" id="zip" placeholder="Zip"/>
                    <ErrorMessage name="zip" component="div"/>

                    <FastField type="text" name="city" placeholder="Colombo"/>
                    <ErrorMessage name={"city"} component="p"/>

                    <FastField type="text" name="country" placeholder="SriLanka"/>
                    <ErrorMessage name={"country"} component="p"/>

                    <label>
                        <Field type="checkbox" name="isAdmin"/>
                        IsAdmin
                    </label>

                    <div className="btns">
                        <button type="submit" className="btn"> Sign up</button>
                        <button type="reset" className="reset-btn" onClick={() => resetForm}> Reset </button>
                    </div>
                </Form>
            }
        </Formik>
    )
}