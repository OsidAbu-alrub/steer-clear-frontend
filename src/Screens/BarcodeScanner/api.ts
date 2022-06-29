import { ImageSourcePropType } from "react-native"
import { useQuery } from "react-query"
import request from "../../axios"
import { useAppNavigation } from "../../Hooks/useAppNavigation"
import { getErrorMessage } from "../../utils/getErrorMessage"
import getValidImage from "../../utils/getValidImage"
import { showSnackbar } from "../../utils/showSnackbar"

export interface Product {
	id: string
	name: string
	barcode: string
	isBadProduct: boolean
	image: ImageSourcePropType
	category: Category
	continent: Continent
}

export interface Category {
	id: string
	name: string
	description: string
}

export interface Continent {
	id: string
	name: string
}

export interface CreateProductBody {
	continentId: string
	categoryId: string
	barcode: string
	name: string
	uploadedBy: string
}

export const useProductScanner = (scannedBarcode: string) => {
	const { navigate } = useAppNavigation()
	useQuery(
		["fetchProduct", scannedBarcode],
		async () => {
			try {
				const res = await request.post(`product/retrieve-first`, {
					barcode: scannedBarcode,
					include: {
						category: true,
						continent: true
					}
				})
				navigate("ProductInfo", {
					...res.data.data,
					image: getValidImage(res.data.data.image)
				} as Product)
			} catch (e: any) {
				navigate("AddProduct", {
					barcode: scannedBarcode
				})
			}
		},
		{
			enabled: !!scannedBarcode
		}
	)
}

export const useCategories = () => {
	const {
		data: categories,
		isLoading: isFetchingCategories,
		error
	} = useQuery("fetchCategories", async () => {
		try {
			const res = await request.post(`category/retrieve`)
			return res.data.data as Category[]
		} catch (e: any) {
			throw getErrorMessage(e)
		}
	})

	if (error) showSnackbar(error as string)

	return { categories: categories ?? [], isFetchingCategories }
}

export const useContinents = () => {
	const {
		data: continents,
		isLoading: isFetchingContinents,
		error
	} = useQuery("fetchContinents", async () => {
		try {
			const res = await request.post(`continent/retrieve`)
			return res.data.data as Continent[]
		} catch (e: any) {
			throw getErrorMessage(e)
		}
	})

	if (error) showSnackbar(error as string, "error")

	return { continents: continents ?? [], isFetchingContinents }
}

export const useFetchProductAlternatives = (
	productId: string,
	categoryId: string,
	continentId: string
) => {
	const {
		data: productAlternatives,
		isLoading: isFetchingAlternatives,
		refetch: refetchAlternatives,
		error
	} = useQuery(
		["fetchProductAlternatives", productId, categoryId, continentId],
		async () => {
			try {
				const res = await request.post(`product/retrieve`, {
					categoryId,
					continentId
				})
				return res.data.data
					.filter(
						(product: any) => product.id !== productId && !product.isBadProduct
					)
					.map((product: any) => ({
						...product,
						image: getValidImage(product.image)
					})) as Product[]
			} catch (e: any) {
				throw getErrorMessage(e)
			}
		},
		{
			enabled: !!productId && !!categoryId && !!continentId
		}
	)

	if (error) showSnackbar(error as string)

	return { productAlternatives, isFetchingAlternatives, refetchAlternatives }
}
