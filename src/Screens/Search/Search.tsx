import { AntDesign } from "@expo/vector-icons"
import { useState } from "react"
import {
	RefreshControl,
	StyleSheet,
	Text,
	TouchableOpacity,
	View
} from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import AppHeader from "../../Components/AppHeader/AppHeader"
import CustomScrollView from "../../Components/CustomScrollView/CustomScrollView"
import Loader from "../../Components/Loader/Loader"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import { useRefetchOnFocus } from "../../Hooks/useRefetchOnFocus"
import useRefresh from "../../Hooks/useRefresh"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants"
import theme from "../../utils/theme"
import { Category, useCategories, useProductsByCategory } from "./api"
import ProductCard from "./ProductCard"

function Search() {
	const { goBack } = useAppNavigation()
	const [selectedCategoryId, setSelectedCategoryId] = useState("")
	const { categories, isFetchingCategories, fetchCategories } = useCategories()
	const { fetchProducts, isFetchingProducts, products } =
		useProductsByCategory(selectedCategoryId)
	const [isRefreshing, handleRefresh] = useRefresh(async () => {
		await fetchCategories()
		await fetchProducts()
	})
	const isRefetchingCategories = useRefetchOnFocus(fetchCategories)
	const isRefetchingProductsByCategories = useRefetchOnFocus(fetchProducts)
	const doesCateogryHaveProducts = products && products.length > 0

	if (
		isFetchingCategories ||
		isRefetchingCategories ||
		isRefetchingProductsByCategories ||
		isFetchingProducts ||
		isRefreshing
	)
		return (
			<>
				<AppHeader actions={() => []} />
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
				style={styles.container}
				refreshControl={
					<RefreshControl refreshing={isRefreshing} onRefresh={handleRefresh} />
				}
			>
				<View style={styles.dropdownContainer}>
					<Dropdown
						style={styles.dropdown}
						search
						searchPlaceholder="Search..."
						maxHeight={300}
						selectedTextStyle={styles.selectedTextInput}
						inputSearchStyle={styles.inputSearch}
						placeholderStyle={styles.placeholder}
						containerStyle={styles.dropdown}
						data={categories}
						valueField="id"
						labelField="name"
						placeholder="Filter by category"
						onChange={(category: Category) =>
							setSelectedCategoryId(category.id)
						}
					/>
				</View>
				<View style={styles.productsContainer}>
					{doesCateogryHaveProducts ? (
						products.map((product) => (
							<ProductCard key={product.id} product={product} />
						))
					) : (
						<Text>This category has no products</Text>
					)}
				</View>
			</CustomScrollView>
		</>
	)
}

const styles = StyleSheet.create({
	container: {
		padding: 20,
		backgroundColor: theme.color.light
	},
	dropdownContainer: {
		flexDirection: "column",
		minWidth: "100%",
		maxWidth: "100%",
		marginBottom: 15,
		backgroundColor: theme.color.secondary,
		padding: 25,
		borderRadius: 10
	},
	dropdown: {
		borderBottomColor: theme.border.color,
		borderBottomWidth: theme.border.width,
		paddingHorizontal: 5
	},
	inputSearch: {
		borderWidth: 0,
		borderBottomWidth: theme.border.width,
		paddingVertical: 2,
		paddingHorizontal: 5
	},
	selectedTextInput: {
		borderBottomColor: theme.border.color,
		borderBottomWidth: 1
	},
	placeholder: {
		opacity: 0.5
	},
	productsContainer: {
		marginVertical: 10,
		width: "100%",
		alignItems: "center"
	}
})

export default Search
