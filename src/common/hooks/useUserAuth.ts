import {useAtom, atom} from "jotai";
import {useEffect} from "react";

export const userAuth = atom<null | string>(localStorage.getItem("token") || null);

export const useUserAuth = () => {
  const [isUserAuth, setIsUserAuth] = useAtom(userAuth);

  useEffect(() => {
    if (isUserAuth) {
      localStorage.setItem("token", isUserAuth);
    }
  }, [isUserAuth]);

  return { isUserAuth, setIsUserAuth };
};
