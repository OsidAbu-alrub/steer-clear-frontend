import Logging from "./src/Navigators/Login";
import { NavigationContainer } from "@react-navigation/native";
import Auth from "./src/Context/Auth";
import { useState } from "react";
import Main from "./src/Navigators/Main";

export default function App() {
	const [isLogged, setIsLogged] = useState(false);
	const value = { isLogged, setIsLogged };

	return (
		<Auth.Provider value={value}>
			<NavigationContainer>
				<Main />
			</NavigationContainer>
		</Auth.Provider>
	);
}
