import { AntDesign } from "@expo/vector-icons"
import { useRoute } from "@react-navigation/native"
import React, { FC, useEffect, useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Dropdown } from "react-native-element-dropdown"
import AppHeader from "../../Components/AppHeader/AppHeader"
import CustomButton from "../../Components/CustomButton/CustomButton"
import CustomInput from "../../Components/CustomInput/CustomInput"
import CustomScrollView from "../../Components/CustomScrollView/CustomScrollView"
import Loader from "../../Components/Loader/Loader"
import { useAuth } from "../../Context/Auth/useAuth"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import { useImagePicker } from "../../Hooks/useImagePicker"
import { SCREEN_HEIGHT, SCREEN_WIDTH } from "../../utils/constants"
import { showSnackbar } from "../../utils/showSnackbar"
import theme from "../../utils/theme"
import {
	Category,
	Continent,
	CreateProductBody,
	useCategories,
	useContinents
} from "./api"

interface RouteParams {
	barcode: string
}

interface Props {}

const AddProduct: FC<Props> = () => {
	const { user } = useAuth()
	const { params } = useRoute()
	const { barcode: scannedBarcode } = params as RouteParams
	const { goBack } = useAppNavigation()
	const { categories, isFetchingCategories } = useCategories()
	const { continents, isFetchingContinents } = useContinents()
	const [name, setName] = useState("")
	const [selectedCategory, setSelectedCategory] = useState(categories[0]?.id)
	const [selectedContinent, setSelectedContinent] = useState(continents[0]?.id)
	const { uploadImage: createProduct, isUploading: isCreatingProduct } =
		useImagePicker<CreateProductBody>({
			uploadUrl: "product/create",
			userId: user.id
		})

	useEffect(() => {
		setSelectedCategory(categories[0]?.id)
		setSelectedContinent(continents[0]?.id)
	}, [categories, continents])

	if (isFetchingCategories || isFetchingContinents) {
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
	}

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
			<CustomScrollView>
				<View style={styles.container}>
					<View style={styles.formContainer}>
						<CustomInput
							style={[styles.input, styles.disabledInput]}
							placeholder="barcode*"
							editable={false}
							fullwidth
							value={scannedBarcode}
						/>
						<CustomInput
							style={styles.input}
							fullwidth
							onChange={(e) => setName(e.nativeEvent.text)}
							placeholder="Name*"
							value={name}
						/>
						<View style={styles.dropdownContainer}>
							<Dropdown
								style={styles.dropdown}
								search
								searchPlaceholder="Search..."
								maxHeight={300}
								selectedTextStyle={styles.selectedTextInput}
								inputSearchStyle={styles.inputSearch}
								containerStyle={styles.dropdown}
								data={categories}
								valueField="id"
								labelField="name"
								placeholder="Category*"
								value={selectedCategory}
								onChange={(category: Category) =>
									setSelectedCategory(category.id)
								}
							/>
						</View>
						<View style={styles.dropdownContainer}>
							<Dropdown
								style={styles.dropdown}
								search
								searchPlaceholder="Search..."
								maxHeight={300}
								selectedTextStyle={styles.selectedTextInput}
								inputSearchStyle={styles.inputSearch}
								containerStyle={styles.dropdown}
								data={continents}
								valueField="id"
								labelField="name"
								placeholder="Category*"
								value={selectedContinent}
								onChange={(continent: Continent) =>
									setSelectedContinent(continent.id)
								}
							/>
						</View>
						<CustomButton
							style={{ marginTop: 10 }}
							disabled={isCreatingProduct}
							onPress={async () => {
								if (!validateFields()) {
									showSnackbar("Must fill all fields", "error")
									return
								}
								const isSuccess = await createProduct(getFormDataObject())
								if (isSuccess) {
									showSnackbar("Thanks for your contribution!", "success")
									goBack()
								}
							}}
						>
							<Text style={styles.text}>
								<Text style={styles.text}>
									{isCreatingProduct ? "Adding product..." : "Add product"}
								</Text>
							</Text>
						</CustomButton>
					</View>
				</View>
			</CustomScrollView>
		</>
	)

	function validateFields() {
		return name && selectedCategory && selectedContinent
	}

	function getFormDataObject(): CreateProductBody {
		return {
			name,
			categoryId: selectedCategory,
			continentId: selectedContinent,
			barcode: scannedBarcode,
			uploadedBy: user.id
		}
	}
}
export default AddProduct

const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: theme.color.light,
		paddingVertical: 30,
		alignItems: "center",
		flexDirection: "column",
		height: SCREEN_HEIGHT,
		minWidth: SCREEN_WIDTH
	},
	formContainer: {
		flexDirection: "column",
		alignItems: "center",
		paddingVertical: 15,
		paddingHorizontal: 20,
		maxWidth: "90%",
		backgroundColor: theme.color.secondary,
		borderRadius: 10
	},
	input: { marginBottom: 15 },
	disabledInput: { opacity: 0.3 },
	dropdown: {
		borderBottomColor: theme.border.color,
		borderBottomWidth: theme.border.width,
		paddingHorizontal: 5
	},
	dropdownContainer: {
		flexDirection: "column",
		minWidth: "100%",
		maxWidth: "100%",
		marginBottom: 15
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
	text: {
		color: "white",
		fontSize: 15
	}
})
