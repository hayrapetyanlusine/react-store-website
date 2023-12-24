import {useMutation} from "react-query";
import {createAccount} from "../api/create-account";

export const useRegistration = () => {
    const {mutate: registerUser} = useMutation(createAccount);
    return {registerUser};
}