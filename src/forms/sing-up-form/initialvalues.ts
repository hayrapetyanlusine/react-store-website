export interface InitialValues {
    name: string,
    email: string,
    password: string,
    phone: string,
    isAdmin: boolean,
    street?: string,
    apartment?: string,
    zip?: string,
    city?: string,
    country?: string
}

export const initialValues: InitialValues = {
    name: "",
    email: "",
    password: "",
    phone: "",
    isAdmin: false,
    street: "",
    apartment: "",
    zip: "",
    city: "",
    country: ""
}