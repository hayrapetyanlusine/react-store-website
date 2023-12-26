import {object, string} from "yup";

export const validationSchema = object({
    email: string()
        .required("Email is required")
        .email("Invalid email"),

    password: string()
        .required("Password is required")
        .min(8, "Password must be at least 8 characters long")
        .matches(
            /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]+$/,
            "Password must contain at least one letter, one number, and one special character"
        )
})