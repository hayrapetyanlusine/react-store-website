export interface InitialValues {
    name: string,
    email: string,
    password: string,
    phone: string,
    isAdmin: boolean,
    street?: string,
    apartment?: string,
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
    city: "",
    country: ""
}