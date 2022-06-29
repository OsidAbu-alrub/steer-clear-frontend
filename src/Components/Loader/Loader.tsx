import React from "react"
import { StyleSheet, View } from "react-native"
import { ActivityIndicator } from "react-native-paper"

const Loader = () => {
	return (
		<View style={[styles.container, styles.horizontal]}>
			<ActivityIndicator size="large" color="#000" />
		</View>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		justifyContent: "center",
		backgroundColor: "transparent"
	},
	horizontal: {
		flexDirection: "row",
		justifyContent: "space-around"
	}
})

export default Loader
