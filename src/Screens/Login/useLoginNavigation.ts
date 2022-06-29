import { NavigationProp, useNavigation } from "@react-navigation/native"
import { LoginRootStack } from "./LoginNavigator"

export const useLoginNavigation = () =>
	useNavigation<NavigationProp<LoginRootStack>>()
