import Logging from "./Navigators/Logging";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./Context/Auth";
import { useState } from "react";
import Main from "./Navigators/Main";

export default function App() {
  const [isLogged, setIsLogged] = useState(false);
  const value = { isLogged, setIsLogged };

  return (
    <Auth.Provider value={value}>
      <NavigationContainer>
        {!isLogged ? <Logging /> : <Main />}
      </NavigationContainer>
    </Auth.Provider>
  );
}
