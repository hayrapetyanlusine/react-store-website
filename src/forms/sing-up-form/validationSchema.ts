import {object, string} from "yup";

export const validationSchema = object({
    name: string()
        .min(3, "Must be at least 3 characters long")
        .max(20, 'Username must not exceed 20 characters')
        .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed in the first name")
        .required("First name is required"),

    email: string()
        .required("Email is required")
        .email("Invalid email"),

    password: string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
            "Password must contain at least one letter, one number, and one special character"
        ),
    phone: string()
        .required("Phone is required")
        .matches(/^\d{8,}$/, "Phone number must have at least 8 digits"),

    street: string()
        .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed in the first name"),

    city: string()
        .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed in the first name"),

    country: string()
        .matches(/^[a-zA-Z]+$/, "Only alphabets are allowed in the first name")

})