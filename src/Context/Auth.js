import { createContext } from "react";

const Auth = createContext({
  isLogged: false,
  setIsLogged: () => {},
});

export default Auth;
