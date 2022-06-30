import { AntDesign } from "@expo/vector-icons"
import { StyleSheet, TouchableOpacity, View } from "react-native"
import AppHeader from "../../Components/AppHeader/AppHeader"
import CustomScrollView from "../../Components/CustomScrollView/CustomScrollView"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import theme from "../../utils/theme"
import Form from "./Form"

export default function CreatePost() {
	const { goBack } = useAppNavigation()
	return (
		<>
			<AppHeader
				actions={() => [
					{
						action: (
							<TouchableOpacity onPress={async () => goBack()}>
								<AntDesign name="back" color="white" size={30} />
							</TouchableOpacity>
						),
						id: "Back"
					}
				]}
				reverseTitleAndActions
			/>
			<CustomScrollView
				style={{
					backgroundColor: theme.color.light
				}}
			>
				<View style={styles.container}>
					<Form />
				</View>
			</CustomScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.color.light,
		alignItems: "center",
		minHeight: "100%"
	}
})
