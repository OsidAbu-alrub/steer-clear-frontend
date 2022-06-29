import { AntDesign } from "@expo/vector-icons"
import { useRoute } from "@react-navigation/native"
import { FC } from "react"
import {
	Image,
	RefreshControl,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native"
import { Divider } from "react-native-paper"
import AppHeader from "../../Components/AppHeader/AppHeader"
import CustomScrollView from "../../Components/CustomScrollView/CustomScrollView"
import Loader from "../../Components/Loader/Loader"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import { useRefetchOnFocus } from "../../Hooks/useRefetchOnFocus"
import useRefresh from "../../Hooks/useRefresh"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants"
import theme from "../../utils/theme"
import { Product, useFetchProductAlternatives } from "./api"
import ProductCard from "./ProductCard"

interface Props {}

const PostProfile: FC<Props> = () => {
	const { goBack } = useAppNavigation()
	const { params } = useRoute()
	const product = params as Product
	const { productAlternatives, isFetchingAlternatives, refetchAlternatives } =
		useFetchProductAlternatives(
			product.id,
			product.category.id,
			product.continent.id
		)
	const isRefetching = useRefetchOnFocus(refetchAlternatives)
	const [isRefreshing, handleRefresh] = useRefresh(refetchAlternatives)
	const doesProductHaveAlternatives =
		productAlternatives && productAlternatives.length > 0

	if (isFetchingAlternatives || isRefetching)
		return (
			<>
				<AppHeader />
				<View
					style={{
						backgroundColor: theme.color.light,
						minHeight: SCREEN_HEIGHT,
						minWidth: SCREEN_WIDTH
					}}
				>
					<Loader />
				</View>
			</>
		)

	return (
		<>
			<AppHeader
				actions={() => [
					{
						action: (
							<TouchableOpacity onPress={goBack}>
								<AntDesign name="back" color="white" size={30} />
							</TouchableOpacity>
						),
						id: "Back"
					}
				]}
				reverseTitleAndActions
			/>
			<CustomScrollView
				refreshControl={
					<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
				}
			>
				<View style={styles.container}>
					<View style={styles.topSection}>
						<View
							style={{
								position: "relative"
							}}
						>
							<Image style={styles.productImage} source={product.image} />
						</View>
						<Text style={styles.productName} numberOfLines={1}>
							{product.name}
						</Text>
						<Text style={styles.productInformation} numberOfLines={2}>
							{product.category.name}
						</Text>
						<Text
							style={[
								styles.productInformation,
								{ color: product.isBadProduct ? "red" : "green" }
							]}
							numberOfLines={2}
						>
							{product.isBadProduct
								? "Occupied Palestinian Territories Product"
								: "Non-Occupied Palestinian Territories Product"}
						</Text>
					</View>
					<Divider style={styles.divider} />
					<View style={styles.products}>
						{doesProductHaveAlternatives ? (
							productAlternatives.map((product) => (
								<ProductCard key={product.id} product={product} />
							))
						) : (
							<Text>This product has no alternatives</Text>
						)}
					</View>
				</View>
			</CustomScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		paddingHorizontal: 10,
		backgroundColor: theme.color.light,
		minWidth: SCREEN_WIDTH,
		alignItems: "center"
	},
	topSection: {
		padding: 25,
		paddingVertical: 30,
		alignItems: "center",
		justifyContent: "center",
		minWidth: "80%"
	},
	productImage: {
		width: SCREEN_WIDTH - 50,
		height: 350,
		borderRadius: 10,
		borderWidth: 2
	},
	productName: {
		marginTop: 25,
		fontSize: 25,
		fontWeight: "bold",
		color: theme.text.secondary
	},
	productInformation: {
		marginTop: 10,
		fontSize: 18,
		textAlign: "center"
	},
	divider: {
		width: "90%",
		height: 0.5,
		backgroundColor: "#000"
	},
	products: {
		backgroundColor: theme.color.light,
		minHeight: "100%",
		width: SCREEN_WIDTH,
		paddingVertical: 25,
		alignItems: "center"
	}
})

export default PostProfile
