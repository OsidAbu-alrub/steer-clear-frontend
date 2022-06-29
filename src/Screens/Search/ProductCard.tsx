import { FC } from "react"
import { Image, StyleSheet, Text, View } from "react-native"
import { Product } from "./api"

interface Props {
	product: Product
}

const ProductCard: FC<Props> = ({ product }) => {
	return (
		<>
			<View style={styles.container}>
				<View style={styles.topSection}>
					<Image style={styles.picture} source={product.image} />
				</View>
				<View style={styles.middleSection}>
					<Text style={styles.name} numberOfLines={1}>
						{product.name}
					</Text>
				</View>
			</View>
		</>
	)
}

export default ProductCard

const styles = StyleSheet.create({
	container: {
		marginBottom: 20,
		backgroundColor: "white",
		borderRadius: 10,
		marginHorizontal: 15,
		padding: 10
	},
	topSection: {
		flexDirection: "row",
		borderBottomWidth: 1,
		borderColor: "#DCD8D5",
		alignItems: "center",
		justifyContent: "center"
	},
	picture: {
		width: "100%",
		height: 300,
		borderRadius: 10,
		margin: 5
	},
	middleSection: {
		marginVertical: 5,
		marginHorizontal: 15,
		flexDirection: "row",
		justifyContent: "center"
	},
	name: {
		paddingHorizontal: 5,
		paddingTop: 10,
		fontSize: 18,
		fontWeight: "bold",
		color: "#000"
	}
})
