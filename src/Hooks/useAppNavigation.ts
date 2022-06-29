import { NavigationProp, useNavigation } from "@react-navigation/native"
import { MainRootStack } from "../Navigators/Main"

export const useAppNavigation = () =>
	useNavigation<NavigationProp<MainRootStack>>()
