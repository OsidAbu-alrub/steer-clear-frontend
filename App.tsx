import { NavigationContainer } from "@react-navigation/native"
import { QueryClient, QueryClientProvider } from "react-query"
import AuthManager from "./src/Context/Auth/Manager"
import Validator from "./src/Context/Auth/Validator"
import Main from "./src/Navigators/Main"
import { LogBox, StatusBar } from "react-native"
import theme from "./src/utils/theme"
import { IS_ANDROID } from "./src/utils/constants"

const queryClient = new QueryClient()

export default function App() {
	LogBox.ignoreLogs(["Setting a timer"])
	IS_ANDROID && StatusBar.setBackgroundColor(theme.color.main)
	return (
		<QueryClientProvider client={queryClient}>
			<AuthManager>
				<NavigationContainer>
					<Validator>
						<Main />
					</Validator>
				</NavigationContainer>
			</AuthManager>
		</QueryClientProvider>
	)
}
