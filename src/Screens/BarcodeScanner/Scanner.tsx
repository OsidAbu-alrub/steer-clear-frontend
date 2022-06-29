import { useFocusEffect } from "@react-navigation/native"
import { BarCodeScanner } from "expo-barcode-scanner"
import React, { useCallback, useState } from "react"
import { RefreshControl, StyleSheet, View } from "react-native"
import AppHeader from "../../Components/AppHeader/AppHeader"
import CustomScrollView from "../../Components/CustomScrollView/CustomScrollView"
import useRefresh from "../../Hooks/useRefresh"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants"
import { useProductScanner } from "./api"

function Scanner() {
	const [scannedBarcode, setScannedBarcode] = useState("")
	const [isRefreshing] = useRefresh(async () => {})
	useProductScanner(scannedBarcode)
	useFocusEffect(
		useCallback(() => {
			setScannedBarcode("")
			return () => setScannedBarcode("")
		}, [])
	)

	return (
		<>
			<View>
				<AppHeader />
			</View>
			<CustomScrollView
				style={styles.container}
				refreshControl={<RefreshControl refreshing={isRefreshing} />}
			>
				<View style={styles.main}>
					<BarCodeScanner
						onBarCodeScanned={({ data: barcode }) => setScannedBarcode(barcode)}
						style={{
							flex: 1,
							width: SCREEN_WIDTH,
							height: SCREEN_HEIGHT
						}}
					/>
					<View style={styles.outlierContainer}>
						<View style={styles.outlier} />
					</View>
				</View>
			</CustomScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: "#FDE8DB",
		flex: 1,
		minWidth: SCREEN_WIDTH
	},
	main: {
		justifyContent: "center",
		alignItems: "center",
		flex: 1,
		minWidth: SCREEN_WIDTH
	},
	outlier: {
		width: "100%",
		height: 200,
		borderWidth: 5,
		borderRightWidth: 0,
		borderLeftWidth: 0,
		borderColor: "red",
		position: "relative",
		top: -40
	},
	outlierContainer: {
		position: "absolute",
		minWidth: SCREEN_WIDTH,
		minHeight: SCREEN_HEIGHT,
		justifyContent: "center",
		alignItems: "center"
	}
})

export default Scanner
