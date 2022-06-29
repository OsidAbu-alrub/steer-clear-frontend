import { StyleSheet, TouchableOpacity, View } from "react-native"
import AppHeader from "../../Components/AppHeader/AppHeader"
import CustomScrollView from "../../Components/CustomScrollView/CustomScrollView"
import theme from "../../utils/theme"
import Form from "./Form"
import { AntDesign } from "@expo/vector-icons"
import { useAppNavigation } from "../../Hooks/useAppNavigation"

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
