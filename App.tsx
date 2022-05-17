import { NavigationContainer } from "@react-navigation/native"
import { QueryClient, QueryClientProvider } from "react-query"
import AuthManager from "./src/Context/Auth/Manager"
import Validator from "./src/Context/Auth/Validator"
import Main from "./src/Navigators/Main"

const queryClient = new QueryClient()

export default function App() {
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
