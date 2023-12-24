import {useMutation} from "react-query";
import {userLogIn} from "../api/user-log-in";

export const useLoginUser = () => {
    const {mutate: logInUser} = useMutation(userLogIn);
    return {logInUser};
}